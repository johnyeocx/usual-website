import React from 'react'
import styles from '../../styles/Subscribe/Success.module.scss'
import Logo from '../../public/images/logo.svg';

function Success() {
    return (
        <div style={{
            width: "100vw",
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'white',

        }}>
            <div className={styles.svgContainer}>
                <Logo style={{ width: '120px' }} />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.text1}>Your purchase was successful!</p>
                <p className={styles.text2}>
                    To manage your subscriptions,
                    download the Usual app on the appstore or google play store. Welcome to Usual :)
                </p>
            </div>

        </div>
    )
}

export default Success