import Head from 'next/head'
import Image from 'next/image'
import Div100vh from 'react-div-100vh'
import styles from '../styles/Landing.module.scss'
import { TextField, styled } from '@mui/material'
import { useContext, useEffect, useRef, useState } from 'react'
import AppContext from './AppContext'

import Landing1 from '../components/Landing/Landing1'
import Landing3 from '../components/Landing/Landing3'
import Better from '../components/Landing/WhyBetter'
import Landing1Mobile from '../components/Landing/Landing1Mobile'
import Landing2 from '../components/Landing/Landing2'


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
  const [business, setBusiness] = useState()
  const [question, setQuestion] = useState()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [isBusinessView, setIsBusinessView] = useState(true)

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
      business
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

    <Div100vh
      className={styles.container}
    >
      {isMobile ? (
        <Landing1Mobile
          isMobile={isMobile}
          registerPageRef={registerPageRef}
          isBusinessView={isBusinessView}
          setIsBusinessView={setIsBusinessView}
        />
      ) : (
        <Landing1
          isMobile={isMobile}
          registerPageRef={registerPageRef}
          isBusinessView={isBusinessView}
          setIsBusinessView={setIsBusinessView}
        />
      )
      }

      {/* <Better /> */}
      <Landing2 isBusinessView={isBusinessView} />
      <Landing3
        registerPageRef={registerPageRef}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        loading={loading}
        handleSubmit={handleSubmit}
        success={success}
        business={business}
        setBusiness={setBusiness}
        isBusinessView={isBusinessView}
      />

    </Div100vh >


  )
}
