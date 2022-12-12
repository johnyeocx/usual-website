import Head from 'next/head'
import Image from 'next/image'
import Div100vh from 'react-div-100vh'
import styles from '../styles/Home.module.scss'
import logo from '../public/images/logo2.png'
import screen from '../public/images/home_screen.png'
import { TextField, styled } from '@mui/material'
import RippleButton from '../components/RippleButton'
import { useContext, useEffect, useRef, useState } from 'react'
import Logo from '../components/Logo'
import AppContext from './AppContext'

import dynamic from 'next/dynamic'
import Screen from '../components/Screen'
import Form from '../components/Form'
import Landing1 from '../components/Landing/Landing1'
import Landing2 from '../components/Landing/Landing2'
import Landing3 from '../components/Landing/Landing3'


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

export const breakpoints = {
  mobile: 481,
  tablet: 768,
  laptop: 950,
  desktop: 1025,
}


export default function Home() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [question, setQuestion] = useState()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [isMobile, setIsMobile] = useState(false)

  const value = useContext(AppContext);
  let { dimensions } = value.state;

  const registerPageRef = useRef(null)

  useEffect(() => {
    if (dimensions && dimensions.width < breakpoints.tablet) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [dimensions])

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

  return (

    <Div100vh className={styles.container}>
      <Landing1 isMobile={isMobile} registerPageRef={registerPageRef} />
      <Landing2 />
      <Landing3 registerPageRef={registerPageRef}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        loading={loading}
        handleSubmit={handleSubmit}
        success={success} />
      {/* {
        isMobile ?
          <>
            <Form
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              loading={loading}
              handleSubmit={handleSubmit}
              success={success}
            />
            <Screen isMobile={isMobile} />
          </>
          :
          <>
            <Screen isMobile={isMobile} />
            <Form
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              loading={loading}
              handleSubmit={handleSubmit}
              success={success}
            />

          </>
      } */}

    </Div100vh >


  )
}
