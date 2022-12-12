import Head from 'next/head';
import { useEffect, useState } from 'react';
import '../styles/globals.scss'
import AppContext from './AppContext';
import { Input, createMuiTheme, MuiThemeProvider, ThemeProvider, createTheme } from "@mui/material";


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

  const color = "#fff";
  const theme = createTheme({
    palette: {

      common: { black: color, white: color },

      primary: { main: color, dark: color, light: color },

      // text: { primary: color, secondary: color }
    },


  });

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
      {/* <MuiThemeProvider theme={theme}> */}
      <ThemeProvider theme={theme}>

        <Component {...pageProps} />
      </ThemeProvider>
      {/* </MuiThemeProvider> */}
    </AppContext.Provider>
  )

}

export default MyApp
