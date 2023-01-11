import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './../../styles/Subscribe/ConfirmSubscription.module.scss'
import { getPricingString } from '../../misc/constants'

function ConfirmSubscription({
    page,
    setPage,
    products,
    categories,
    checked,
    onConfirmClicked,
    loading
}) {
    const [fadeOut, setFadeOut] = useState(false)

    const onBackClicked = () => {
        setFadeOut(true);
        setTimeout(() => {
            setPage(1);
            setFadeOut(false);
        }, 150)
    }

    const numberOfChecked = () => {

        let count = 0;
        checked.map((check) => {
            if (check) {
                count++;
            }
        })
        return count;
    }

    const getTotalPrice = () => {
        let price = 0.0
        for (let i = 0; i < products.length; i++) {
            if (checked[i]) {
                price += products[i].subscription_plan.unit_amount;
            }
        }
        return price;
    }

    return (
        <div className={`${styles.container} ${fadeOut ? styles.fadeOut : styles.fadeIn}`}>
            <div>
                <div className={styles.top}>
                    <button className={styles.backButton} onClick={() => onBackClicked()}>
                        <FaArrowLeft className={styles.icon} />
                    </button>
                    <div className={styles.title}>
                        Confirm Subscription
                    </div>
                </div>
                <div className={styles.productsList}>
                    {
                        numberOfChecked() > 0 ? products.map((subProduct, index) => {
                            const product = subProduct.product;
                            const subPlan = subProduct.subscription_plan;
                            if (checked[index]) return (
                                <div key={index} className={styles.productCard}>
                                    <div className={styles.productName}>
                                        <p>{`${index + 1}.`}</p>
                                        <div className={styles.name}>{product.name}</div>
                                    </div>
                                    <div>
                                        <p classNze={styles.pricing}>{getPricingString(subPlan)}</p>
                                    </div>

                                </div>
                            )
                        }) : (
                            <div style={{ fontSize: '18px' }}>No subscriptions selected</div>
                        )
                    }
                </div>
                {
                    numberOfChecked() > 0 && <div className={styles.totalContainer}>
                        <div className={styles.inset}></div>
                        <p className={styles.totalText}>{`Total: £${getTotalPrice()}`}</p>
                    </div>
                }
            </div>


            {/* PURCHASE */}
            <div>

                <div className={styles.buttonContainer}>
                    <button onClick={() => onConfirmClicked()}>
                        {loading ? (
                            <div className={styles.spinner}></div>
                        ) : (
                            <>Confirm!</>
                        )}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ConfirmSubscription