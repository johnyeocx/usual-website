import React from 'react'
import styles from '../styles/Home.module.scss'
import screen from '../public/images/home_screen.png'
import Image from 'next/image'


function Screen({ isMobile }) {

    return (
        <div className={styles.left}>
            {isMobile && (
                <p style={{
                    fontFamily: "CircularStd",
                    color: 'black',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    padding: '0px',
                }}>
                    This could be you
                </p>
            )}

            <div className={`${styles.right}`}>
                <div className={styles.screenContainer}>

                    <Image src={screen}
                        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                        alt=""
                    />
                </div>
            </div>


        </div>
    )
}

export default Screen