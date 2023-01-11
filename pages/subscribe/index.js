import React, { useEffect, useState } from 'react'
import { createCFromSubReq, createSubscriptionReq, getBusinessByIdReq } from '../../requests/api'
import styles from '../../styles/Subscribe/Subscribe.module.scss'
import SelectProducts from '../../components/Subscribe/01_SelectProducts'
import InputDetails from '../../components/Subscribe/02_InputDetails'
import ConfirmSubscription from '../../components/Subscribe/03_ConfirmSubscription'
import { useRouter } from 'next/router'


function Subscribe() {
    const [business, setBusiness] = useState(null);
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [checked, setChecked] = useState(null);
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const [createDetails, setCreateDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        card: {
            number: "",
            expiry_month: "",
            expiry_year: "",
            cvc: "",
        }
    })

    const createCatMap = (categories) => {
        console.log(categories)
        let catMap = {}
        categories.map((category) => {
            if (!catMap[category.category_id]) {
                catMap[category.category_id] = category.title
            }
        })
        return catMap;
    }

    const getBusiness = async (id) => {
        try {
            const { data } = await getBusinessByIdReq(id)

            if (data != null) {
                console.log(data.sub_products)
                const sortedProducts = data.sub_products.sort(
                    (a, b) => a.product.category_id - b.product.category_id)

                const cats = createCatMap(data.product_categories);

                setBusiness(data.business)
                setProducts(sortedProducts)
                setCategories(cats)

                const checkedArr = new Array(sortedProducts.length).fill(true);
                setChecked(checkedArr);
            }

        } catch (error) {

        }
    }

    const setProductChecked = (index) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        console.log("Here")
        setChecked(newChecked);
    }

    useEffect(() => {

        if (window == null) return


        const queryParameters = new URLSearchParams(window.location.search)
        const businessId = queryParameters.get("business_id")
        getBusiness(businessId)

    }, [])

    const createCustomer = async () => {
        try {
            const details = { ...createDetails }
            details.card.expiry_month = parseInt(details.card.expiry_month)
            details.card.expiry_year = parseInt(details.card.expiry_year)
            // SIMULATE
            // card: 4000008260000000
            // exp: 10/27
            // cvc: 123
            // console.log(details)
            const { data } = await createCFromSubReq(details)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const createSubscriptions = async (accessToken) => {
        let productIds = []
        products.map((product, index) => {
            if (checked[index]) {
                productIds.push(product.product.product_id)
            }
        })

        productIds = [1, 6]
        const res = await createSubscriptionReq(
            { "product_ids": productIds },
            accessToken
        )

        return res.status == 200
    }

    const confirmClicked = async () => {
        // 1. create user
        setLoading(true)
        const data = await createCustomer();
        if (data != null) {
            await createSubscriptions(data.access_token);
        }
        setLoading(false)
        router.push('/subscribe/success')


    }

    if (business == null) {
        return
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                {page == 0 ?
                    <SelectProducts
                        business={business}
                        products={products}
                        categories={categories}
                        checked={checked}
                        setProductChecked={setProductChecked}
                        page={page}
                        setPage={setPage}
                    />
                    : page == 1 ?
                        <InputDetails
                            setPage={setPage}
                            details={createDetails}
                            setDetails={setCreateDetails}
                        />
                        : <ConfirmSubscription
                            page={page}
                            setPage={setPage}
                            products={products}
                            checked={checked}
                            onConfirmClicked={confirmClicked}
                            loading={loading}
                        />
                }
            </div>
        </div>
    )
}

export default Subscribe