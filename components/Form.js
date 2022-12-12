
import styles from '../styles/Form.module.scss'
import { TextField, styled } from '@mui/material'
import Logo from '../components/Logo'
import LogoDark from '../public/images/logo_dark.svg'
import { useRef } from 'react';

const CustomTextField = styled(TextField)({
    "& .MuiFilledInput-root": {
        backgroundColor: "#444"
    },
    "& .MuiFilledInput-root:hover": {
        backgroundColor: "#444",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
            backgroundColor: "#444"
        }
    },
    "& .MuiFilledInput-root.Mui-focused": {
        backgroundColor: "#444"
    }
});


function Form({
    name, setName, email, setEmail, loading, handleSubmit, success
}) {
    const emailRef = useRef(null);
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>

                <div className={styles.headerContainer}>
                    <div style={{ width: 140, marginBottom: '12px' }}>
                        {/* <Logo /> */}
                        <LogoDark />
                    </div>

                    <p> Register your interest now to join our community of early users.</p>
                </div>

                {success ? (
                    <div className={styles.successText}>Thank you for joining us, every sign up counts. We look forward to getting in touch with you :)</div>
                ) : (
                    <div className={styles.formContainer}>
                        <CustomTextField
                            className={styles.textField}
                            label="Name"
                            variant="filled"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            onKeyDown={(e) => {
                                // e.preventDefault()
                                if (e.key == "Enter") {
                                    emailRef.current.focus();
                                }
                            }}

                            style={{
                                backgroundColor: "grey !important"
                            }}

                            InputLabelProps={{
                                style: {
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    width: '100%',
                                    color: '#DDD', fontFamily: "CircularStd"
                                }
                            }}

                            inputProps={{ style: { color: "white", fontFamily: "CircularStd" } }}
                            blurOnSubmit={false}
                        />

                        <CustomTextField
                            inputRef={emailRef}
                            className={styles.textField}
                            label="Email"
                            variant="filled"

                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}

                            style={{
                                backgroundColor: "grey !important"
                            }}

                            InputLabelProps={{
                                style: {
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    width: '100%',
                                    color: '#DDD',
                                    fontFamily: "CircularStd"
                                }
                            }}

                            inputProps={{
                                style: {
                                    color: "white",
                                    fontFamily: "CircularStd",
                                }
                            }}
                            blurOnSubmit={false}
                        />

                        <button className={styles.submitButton} onClick={() => {
                            handleSubmit()
                        }}>
                            {loading ? (
                                <div className={styles.spinner}></div>

                            ) : (
                                <>Join Us!</>
                            )}
                        </button>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Form