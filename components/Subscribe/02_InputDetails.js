import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './../../styles/Subscribe/InputDetails.module.scss'
import { TextField } from '@mui/material';

const CustomTextField = (props) => {
  return (
    <TextField {...props}
      inputProps={{
        style: {
          fontSize: 15,
          fontFamily: "CircularStd"
        }
      }} // font size of input text
      InputLabelProps={{
        style: {
          fontSize: 15,
          fontFamily: "CircularStd"
        }
      }}
    />
  )
}
function InputDetails({ setPage }) {

  const [fadeOut, setFadeOut] = useState(false)
  const [fadeOutLeft, setFadeOutLeft] = useState(false)

  const onNextClicked = () => {
    setFadeOut(true)
    setTimeout(() => {
      setPage(2);
      setFadeOut(false);
    }, 150)
  }


  const onBackClicked = () => {
    setFadeOut(true);
    setTimeout(() => {
      setPage(0);
      setFadeOut(false);
    }, 150)
  }

  return (
    <div className={`${styles.container} 
    ${fadeOut ? styles.fadeOut : styles.fadeIn}`}>
      <div>

        <button className={styles.backButton} onClick={() => onBackClicked()}>
          <FaArrowLeft className={styles.icon} />
        </button>
        <div className={styles.title}>
          Details
        </div>
        <div className={`${styles.formContainer} `}>
          <div className={styles.row}>
            <CustomTextField className={styles.textField}
              color='secondary'
              variant='outlined'
              label="Full Name"
            />
            <CustomTextField className={styles.textField}
              color='secondary'
              variant='outlined'
              label="Email"
            />
          </div>
        </div>
        {/* <div className={styles.title}>
          Address
        </div>
        <div className={`${styles.formContainer} `}>
          <div className={styles.row} style={{ marginBottom: '20px' }}>
            <CustomTextField className={styles.textField}
              color='secondary'
              variant='outlined'
              label="Country"
            />
            <CustomTextField className={styles.textField}
              color='secondary'
              variant='outlined'
              label="Postal Code"
            />
          </div>
          <CustomTextField
            className={styles.textField2}
            style={{ marginBottom: '20px' }}
            color='secondary'
            variant='outlined'
            label="Address Line 1"
          />
          <CustomTextField
            className={styles.textField2}
            style={{ marginBottom: '20px' }}
            color='secondary'
            variant='outlined'
            label="Address Line 2"
          />
          <CustomTextField
            className={styles.textField2}
            color='secondary'
            variant='outlined'
            label="City"
          />
        </div> */}
        <div className={styles.title}>
          Card Details
        </div>
        <div className={`${styles.formContainer} `}>
          <CustomTextField
            color='secondary'
            variant='outlined'
            label="Card Number"
            style={{ width: '100%', marginBottom: '20px' }}
          />
          <div className={`${styles.row} `} style={{ marginBottom: '20px' }}>
            <div className={styles.row2}>
              <CustomTextField
                style={{ width: '40%', marginRight: '10px' }}
                color='secondary'
                variant='outlined'
                label="MM"
              />
              <CustomTextField
                style={{ width: '50%' }}
                color='secondary'
                variant='outlined'
                label="YYYY"
              />
            </div>
            <CustomTextField
              color='secondary'
              variant='outlined'
              label="CVC"
              style={{ width: "48%" }}
            />
          </div>
        </div>
      </div>



      {/* PURCHASE */}
      <div className={styles.buttonContainer}>
        <button onClick={() => onNextClicked()}>Next</button>
      </div>
    </div>
  )
}

export default InputDetails