
import React from 'react'
import styles from '../../styles/Landing.module.scss';
import screen4 from '../../public/images/screen4.png'
import Image from 'next/image';
import Form from '../Form';

function Landing3({
    name,
    setName,
    email,
    setEmail,
    loading,
    handleSubmit,
    success,
    registerPageRef
}) {
    return (
        <div className={`${styles.landing3Container} ${styles.stepContainer} `}>
            <div className={`${styles.left} `}>
                <div className={styles.stepTitle}>
                    Enjoy your new subscription product!
                </div>
                <div className={styles.screenContainer}>
                    <Image src={screen4}
                        style={{
                            height: '100%', width: '100%'
                        }}
                        alt=""
                    />
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
                    success={success} />
            </div>
        </div>
    )
}

export default Landing3