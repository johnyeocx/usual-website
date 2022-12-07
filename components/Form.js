
import styles from '../styles/Home.module.scss'
import { TextField, styled } from '@mui/material'
import Logo from '../components/Logo'

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#333',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
            borderRadius: '10px',
        },
        '&:hover fieldset': {
            borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
});


function Form({
    name, setName, email, setEmail, loading, handleSubmit, success
}) {
    return (
        <div className={styles.right}>
            <div className={styles.contentContainer}>

                <div className={styles.headerContainer}>
                    <div style={{ width: 140, marginBottom: '12px' }}>
                        <Logo />
                    </div>

                    <div className={styles.subtitle}>
                        Build lasting relationships
                    </div>

                    <p>Join our waitlist and get exclusive early user privileges.</p>
                </div>

                {success ? (
                    <div className={styles.successText}>Thank you for joining us, every sign up counts. We look forward to getting in touch with you :)</div>
                ) : (
                    <div className={styles.formContainer}>
                        <CustomTextField
                            className={styles.textField}
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <CustomTextField
                            className={styles.textField}
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button className={styles.submitButton} onClick={() => {
                            handleSubmit()
                        }}>
                            {loading ? (
                                <div className={styles.spinner}></div>

                            ) : (
                                <>Join Our Waiting List</>
                            )}
                        </button>

                        <div className={styles.rippleButtonContainer}>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form