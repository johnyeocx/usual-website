import React, { useRef } from 'react'
import styles from '../../styles/Landing.module.scss';
import Logo from '../../public/images/logo.svg';
import screen1 from '../../public/images/screen1.png'
import Image from 'next/image';

function Landing1({ isMobile, registerPageRef }) {

    const firstScreenRef = useRef()

    return (
        <div className={styles.landing1Container}>
            <div className={`${styles.left}`}>

                <div className={styles.brandContainer}>
                    {/* <div className={styles.logoContainer}> */}
                    <div className={styles.svgContainer}>
                        <Logo />
                    </div>
                    {/* </div> */}


                    <div className={styles.subtitle}>
                        Build lasting relationships
                    </div>

                    <div className={styles.titleContainer}>
                        Create a subscription service in 3 simple steps.
                    </div>

                </div>

                {isMobile && (
                    <div className={styles.letsGoButtonContainer}>
                        <button
                            onClick={() => {
                                firstScreenRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
                            }}
                            className={styles.letsGoButton}>
                            Let&apos;s Go
                        </button>
                    </div>

                )}

                <div className={styles.registerButtonContainer}>
                    <button
                        onClick={() => {
                            registerPageRef.current.scrollIntoView({ behavior: "smooth" })
                        }}
                        className={styles.registerButton}>
                        Be an early user!
                    </button>
                </div>

            </div>

            <div
                ref={firstScreenRef}
                className={`${styles.right} ${styles.stepContainer}`}>
                <div className={styles.stepTitle}>
                    Step 1: <br /> Fill up your product details
                </div>
                <div className={styles.screenContainer}>
                    <Image src={screen1}
                        style={{
                            height: '100%', width: '100%', objectFit: 'contain'
                        }}
                        alt=""
                    />
                </div>
            </div>


        </div>
    )
}

export default Landing1