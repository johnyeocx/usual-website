import React from 'react'
import styles from '../../styles/Landing.module.scss';
import Logo from '../Logo';
import screen2 from '../../public/images/screen2.png'
import screen3 from '../../public/images/screen3.png'
import Image from 'next/image';

function Landing2() {
    return (
        <div className={`${styles.landingContainer} ${styles.stepContainer} `}>
            <div className={`${styles.left} `}>
                <div className={styles.stepTitle}>
                    Step 2: <br /> Fill in your subscription pricing
                </div>
                <div className={styles.screenContainer}>
                    <Image src={screen2}
                        style={{
                            height: '100%', width: '100%', objectFit: "contain"
                        }}
                        alt=""
                    />
                </div>
            </div>

            <div className={`${styles.right} ${styles.stepContainer} `}>
                <div className={styles.stepTitle}>
                    Step 3: <br /> Set a usage for your subscribers
                </div>
                <div className={styles.screenContainer}>
                    <Image src={screen3}
                        style={{
                            height: '100%', width: '100%', objectFit: "contain"
                        }}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Landing2