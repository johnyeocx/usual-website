import Head from 'next/head'
import Image from 'next/image'
import Div100vh from 'react-div-100vh'
import styles from '../styles/Home.module.scss'
import logo from '../public/images/logo2.png'
import { TextField, styled } from '@mui/material'
import RippleButton from '../components/RippleButton'
import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'


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
    },
    '&:hover fieldset': {
      borderColor: 'grey',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
});

const GOOGLE_CLIENT_ID = "108268096796678547799"
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDNJlFVCYLaQ33a\n1KQeOL4e+fRYsabJueN4u5VqTM+2oZFQSMF15arc5MF++g+Cgdn0UbHbP+MEXh/h\n7WKlo11C2xQCGxa39UW/dS0H9E1yE7p+/bUG0RNpYuk1dm5ZlKiO3lkCpQt4UM0E\nr8y6ORKKcuciqO7udtmY3TkVWnQ8M+SOlgrvdyHxa6Nx+5STkv1tfygImKrjHqyV\nxFVODqPbgflwuIxnGBYLzkNQ0rnXEzFMb5Dq35S6qWLFfZPB+HqX5jIoJceFyqtp\nyXyfhhkzKPzQudTOAD+dJhbgUOd5yK7ojddtZraAevYXMDYK+m9J2JWFLSyC047A\n7hr9aktXAgMBAAECggEABuItQnQyPs6a73fJFfaDcpiieUNkvEoPduKcbder9I3R\nSWdXjnQpWoYWdANB9/gRbyA6noezP1dFLJiBgdtMaszdDAEKrxt8vqLY4vZwjs5Y\nqKAsrdDgHN4jwxZ5N2pEiZ6uT+dnzh6v8mNPtEPr+ldGqCQQ+FFmlbl+i9fgJJDt\nzT6cLaRQLi3E042gJLCs/7m3LG+4YaeNxmT4oZ8TtgZjYkA0QcNNl2IbEfc8F3fl\n0AzlazzWZ2k/MWN76RY83M6XHgOt9txj5QS32rpCi95NN9NL7DZzjMIg6aCq5xZH\na0uUxArmnYYoGwTd8rARYTJQ/a4er1qrXW/GR09+CQKBgQDqhFT/73b/iI01IPic\n2Lb45gtg80HeOxzlywC91o8+fJj24GmMMAkgrRigFFpttItRsM6wbYwwXRFatmKP\nfdoG1kKnUQ0w2fbXpqBTFqOxHiSp+nlkA0Lcp6IcNXrWNctbFITJKJHwPoq8tHRZ\noYhaeBgJSfuvcGGJXEVyRCUrgwKBgQDf8UsBbK0mbUxxp7B2tCDbJ47qG2ezd3gB\neNYZUZRtvalmJFJvKfRfz6s5SfBQ8Umsn57X2/FLbGtfpY2m8zEzfT/mClfOI5Qt\nAZrqgF9n82PkOfX2nJhkzBvTHTTEzvhDOvKUinyv2ytKXK7xTWMsEmYR/ocDIPTK\nH/Tx8Jg0nQKBgHCWPVRtu1xsSxZxkMmEBTuy/U17G2k8SeBMODvrUPO3z5veGu3x\ndcBZOZRIkS1P2v7J+kCbJw1k8Nry6phm3BAiNveqosGMMsRPO3MIUGfMx99O345T\nPns+g0Y1qpZCVzGPxTvpnT6QV/zGSYFqWlLMiwWSniEYu8q9IJ399zZPAoGBALIP\n3EHftbXORnBAk7Fu/IkFZT+EVup+Xe9ds28iTNENc3qB+wHk7CiaqVy+C9VwZdJa\ngSTF/5CnPqEos/9Bc6erOXmiU7rW02UN164KMNIo1w6Lf6V9UjcjjCRLHsA2iXR7\nlJLDouz5aeyQ0ZGQpQBQCNTZ+2RjegCVdGBDm+KJAoGBAJBp6gJW+TDB4UjBmAd0\nCTyH2cCf+XaPUQTJln75Pfz/C/hpmUz888KEQ/qjqW1kppfdTcSdraDy2YsxUCAn\nW2WtxmsdbIyF2v/GELosYIOoL8vrIC/P95NUf++Yz4V23TXm/C8jBYgMm39iuxTb\nVlAmobmwomaf6/z3uRo2i/hO\n-----END PRIVATE KEY-----\n"
const GOOGLE_SHEET_ID = "1BiPZumzkK4t015CYr7BZvCQ3D_CWovFXhPDiwY0cgUE"

export default function Home() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [question, setQuestion] = useState()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const form = {
      name,
      email,
      question
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
    } catch (error) {
      console.log("failed to submit")
    }

    setLoading(false)
    setSuccess(true)
  }

  if (success) {
    return (
      <Div100vh className={styles.container}>

        <div className={styles.container1}>

          <div className={styles.imgContainer}>
            <Image src={logo}
              width={200}
              style={{ objectFit: 'contain' }}
              alt=""
            />
          </div>

          <div className={styles.subtitle}>
            Build lasting relationships
          </div>

          <div className={styles.successText}>
            Thank you for joining us, every sign up counts.
            <br></br>
            We look forward to contacting you soon :)
          </div>
        </div>
      </Div100vh >
    )
  }

  return (

    <Div100vh className={styles.container}>
      <div className={styles.container1}>

        <div className={styles.imgContainer}>
          <Image src={logo}
            width={200}
            style={{ objectFit: 'contain' }}
            alt=""
          />
        </div>
        <div className={styles.subtitle}>
          Build lasting relationships
        </div>

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
          <CustomTextField
            className={`${styles.textField} `}
            multiline={true}
            rows={3}
            label="Ask a question"
            variant="outlined"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <div className={styles.rippleButtonContainer}>
          <RippleButton
            text="Join Our Waiting List"
            height={100}
            onClick={() => {
              handleSubmit()
            }}
            submitting={loading}
          />
        </div>
      </div>
    </Div100vh >


  )
}
