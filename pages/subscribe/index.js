import React, { useEffect, useState } from 'react'
import { getBusinessByIdReq } from '../requests/api'
import styles from '../../styles/Subscribe/Subscribe.module.scss'
import SelectProducts from '../../components/Subscribe/01_SelectProducts'
import SubscribeLogin from '../../components/Subscribe/02_InputDetails'
import ConfirmSubscription from '../../components/Subscribe/03_ConfirmSubscription'


function Subscribe() {
    const [business, setBusiness] = useState(null);
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [checked, setChecked] = useState(null);

    const [page, setPage] = useState(0)

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
                const sortedProducts = data.sub_products.sort(
                    (a, b) => a.product.category_id - b.product.category_id)

                const cats = createCatMap(data.product_categories);

                setBusiness(data.business)
                setProducts(sortedProducts)
                setCategories(cats)

                const checkedArr = new Array(sortedProducts.length).fill(false);
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
                    : page == 1 ? <SubscribeLogin setPage={setPage} />
                        : <ConfirmSubscription
                            page={page}
                            setPage={setPage}
                            products={products}
                            checked={checked}
                        />
                }
            </div>



        </div>
    )
}

export default Subscribe