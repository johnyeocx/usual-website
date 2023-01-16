
import React from 'react'
import styles from '../../styles/Landing/WhySubscriptions.module.scss';
import screen4 from '../../public/images/screen4.png'
import Image from 'next/image';
import Form from '../Form';

function WhySubscriptions({
    name,
    setName,
    email,
    setEmail,
    loading,
    handleSubmit,
    success,
    registerPageRef,
    business,
    setBusiness,
    reasons,
    isBusinessView
}) {

    return (
        <div className={`${styles.landing3Container} ${styles.stepContainer} `}>
            <div className={`${styles.left} `}>
                <div className={styles.title}>
                    Why Subscriptions?
                </div>
                <div className={styles.reasonsContainer}>
                    {
                        reasons.map((reason, index) => {
                            return (
                                <div key={index} className={styles.reasonCard}>
                                    <div className={styles.numberContainer}>
                                        <div className={styles.number}>{index + 1}</div>
                                    </div>

                                    <div className={styles.text}>{reason.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div ref={registerPageRef} className={`${styles.right}`}>
                <Form
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    loading={loading}
                    handleSubmit={handleSubmit}
                    success={success}
                    business={business}
                    setBusiness={setBusiness}
                />
            </div>
        </div >
    )
}

export default WhySubscriptions