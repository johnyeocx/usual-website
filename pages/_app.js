import Head from 'next/head';
import { useEffect, useState } from 'react';
import '../styles/globals.scss'
import AppContext from './AppContext';

function MyApp({ Component, pageProps }) {

  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState(null);
  const [bgColor, setBgColor] = useState("#FFFDFD")
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof (window) == undefined) return;

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
    setLoaded(true);

    const handleScreenResize = () => {
      console.log("handling screen screen size")
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleScreenResize);
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    }
  }, [])

  if (!loaded) return
  return (
    <AppContext.Provider value={{
      state: {
        dimensions
      },
    }}>
      <Head>
        <title>Usual</title>
        <link rel="shortcut icon" href="/static/logo1.png" />
      </Head>
      <Component {...pageProps} />
    </AppContext.Provider>
  )

}

export default MyApp
