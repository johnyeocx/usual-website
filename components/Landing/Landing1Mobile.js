import React, { useState } from 'react'
// import styles from '../../styles/Landing/Landing1.module.scss';
import Logo from '../../public/images/logo.svg';

import BusinessScreen from '../../public/images/business_screen.png'
import CustomerScreen from '../../public/images/customer_screen.png'
import Image from 'next/image';

import stylesM from '../../styles/Landing/Landing1Mobile.module.scss';


function Landing1Mobile({
    isBusinessView,
    setIsBusinessView,
    registerPageRef
}) {

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
        <div className={stylesM.container}>
            <div className={stylesM.header}>
                <div className={stylesM.logo}>
                    <Logo style={{ width: '130px' }} />
                </div>
                <button
                    onClick={() => registerPageRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' })}
                    className={stylesM.earlyText}>
                    Get early access now
                </button>
            </div>
            <div className={stylesM.slogan}>
                The better
                <br></br>
                way to susbcribe.
            </div>

            <div className={stylesM.screens}>
                <div className={stylesM.screenContainer}>
                    {
                        isBusinessView ? (
                            <Image src={BusinessScreen}
                                style={{
                                    height: '100%', width: '100%', objectFit: 'contain'
                                }}
                                className={`${stylesM.fadeInRight} ${bizFade && stylesM.fadeOutRight}`}
                                alt=""
                            />
                        ) : (
                            <Image src={CustomerScreen}
                                style={{
                                    height: '100%', width: '100%', objectFit: 'contain'
                                }}
                                className={`${stylesM.fadeInLeft} ${cusFade && stylesM.fadeOutLeft}`}
                                alt=""
                            />
                        )
                    }

                </div>
            </div>

            <div className={stylesM.buttonsContainer}>
                <button
                    onClick={bizToCusTransition}
                    className={` ${stylesM.button1} ${stylesM.button} ${isBusinessView ? stylesM.unselected : stylesM.selected}`}>
                    I'm a customer
                </button>

                <button
                    onClick={cusToBizTransition}
                    className={`${stylesM.button} ${isBusinessView ? stylesM.selected : stylesM.unselected}`}>
                    I'm a business
                </button>
            </div>


        </div>
    )
}

export default Landing1Mobile