import React, { useRef, useState } from 'react'
import styles from '../../styles/Landing/Landing1.module.scss';

import Logo from '../../public/images/logo.svg';

import BusinessScreen from '../../public/images/business_screen.png'
import CustomerScreen from '../../public/images/customer_screen.png'
import Image from 'next/image';

function Landing1({
    isMobile,
    registerPageRef,
    isBusinessView,
    setIsBusinessView
}) {

    const firstScreenRef = useRef()

    const [cusFade, setCusFade] = useState(false)
    const [bizFade, setBizFade] = useState(false)

    const cusToBizTransition = (e) => {
        setCusFade(true)
        setTimeout(() => {
            setIsBusinessView(true)
            setCusFade(false)
        }, 100)
    }

    const bizToCusTransition = (e) => {
        setBizFade(true)
        setTimeout(() => {
            setIsBusinessView(false)
            setBizFade(false)
        }, 100)
    }

    return (
        <div className={styles.landing1Container}>
            <div className={`${styles.left}`}>

                <div className={styles.brandContainer}>
                    {/* <div className={styles.logoContainer}> */}
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    {/* </div> */}


                    <div className={styles.slogan}>
                        The better way to subscribe
                    </div>

                    <button onClick={() => {
                        registerPageRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
                    }} className={styles.earlyText}>
                        Get early access now.
                    </button>

                </div>

                {/* {isMobile && (
                    <div className={styles.letsGoButtonContainer}>
                        <button
                            onClick={() => {
                                
                            }}
                            className={styles.letsGoButton}>
                            Let&apos;s Go
                        </button>
                    </div>
                )} */}

                <div className={styles.buttonsContainer}>
                    <button
                        onClick={bizToCusTransition}
                        className={` ${styles.button1} ${styles.button} ${isBusinessView ? styles.unselected : styles.selected}`}>
                        I&lsquo;m a customer
                    </button>

                    <button
                        onClick={cusToBizTransition}
                        className={`${styles.button} ${isBusinessView ? styles.selected : styles.unselected}`}>
                        I&lsquo;m a business
                    </button>
                </div>

            </div>

            <div
                ref={firstScreenRef}
                className={`${styles.right} ${styles.stepContainer}`}>
                <div className={styles.screenContainer}>
                    {
                        isBusinessView ? (
                            <Image src={BusinessScreen}
                                style={{
                                    height: '100%', width: '100%', objectFit: 'contain'
                                }}
                                className={`${styles.fadeInRight} ${bizFade && styles.fadeOutRight}`}
                                alt=""
                            />
                        ) : (
                            <Image src={CustomerScreen}
                                style={{
                                    height: '100%', width: '100%', objectFit: 'contain'
                                }}
                                className={`${styles.fadeInLeft} ${cusFade && styles.fadeOutLeft}`}
                                alt=""
                            />
                        )
                    }

                </div>
            </div>


        </div>
    )
}

export default Landing1