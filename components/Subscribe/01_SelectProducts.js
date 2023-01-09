import React, { useEffect, useState } from 'react'
import styles from '../../styles/Subscribe/SelectProducts.module.scss'
import { Checkbox } from '@mui/material'
import { getProductImage, getPricingString, getBusinessImage } from '../../misc/constants'


export const CustomCheckbox = (props) => {
    return (
        <Checkbox {...props}
            sx={{
                color: "#111",
                '&.Mui-checked': {
                    color: "#111",
                },
            }}
        />
    )
}

function SelectProducts({
    business,
    products,
    categories,
    checked,
    setProductChecked,
    page,
    setPage
}) {

    const [fadeOut, setFadeOut] = useState(false)
    const onNextClicked = () => {
        setFadeOut(true)
        setTimeout(() => {
            setPage(1);
            setFadeOut(false);
        }, 150)
    }



    return (
        <div className={`${styles.container} ${fadeOut ? styles.fadeOut : styles.fadeIn}`}>
            <div className={styles.firstHalf}>
                {/* BUSINESS */}
                <div className={styles.businessContainer}>
                    <div className={styles.top}>
                        <div className={styles.logoContainer}>
                            <img src={getBusinessImage(business.business_id)}
                                alt=""
                            />
                        </div>
                        <div className={styles.name}>
                            {business.name}
                        </div>
                    </div>
                </div>
                {/* PRODUCTS */}
                <div className={styles.productsContainer}>
                    <div className={styles.promptText}>Choose a subscription</div>
                    {
                        products.map((subProduct, index) => {
                            const product = subProduct.product;
                            const subPlan = subProduct.subscription_plan;
                            return (
                                <div className={styles.productCard}>
                                    <div className={styles.productContent}>
                                        <div className={styles.productImgContainer}>
                                            <img src={getProductImage(product.product_id)}
                                                alt=""
                                            />
                                        </div>
                                        <div className={styles.productDetails}>
                                            <div className={styles.name}>{product.name}</div>
                                            <p className={styles.category}>{categories[product.category_id]}</p>
                                            <p className={styles.pricing}>{getPricingString(subPlan)}</p>
                                        </div>
                                    </div>
                                    <CustomCheckbox
                                        checked={checked[index]}
                                        onChange={() => setProductChecked(index)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* PURCHASE */}
            <div className={styles.buttonContainer}>
                <button onClick={() => onNextClicked()}>Next</button>
            </div>

        </div>
    )
}

export default SelectProducts