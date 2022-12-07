import React from 'react';
import styles from '../styles/Components/RippleButton.module.scss';

function RippleButton({ type, onClick, submitting }) {
    return (
        <div>
            <button className={type === "primary"
                ? `${styles.rippleButton} ${styles.rpPrimary}`
                : `${styles.rippleButton} ${styles.rpSecondary}`}
                onClick={() => onClick()}
            >
                {
                    submitting ? (
                        <div className={styles.spinner}></div>

                    ) : (
                        <>Register Now</>
                    )
                }
            </button>

        </div >

    )
}

export default RippleButton