import Footer from '../componentes/footer/footer'
import Header from '../componentes/Header/Header'
import {ChakraProvider} from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return(
    
    //<ChakraProvider>
    <>
    <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  //</ChakraProvider>
  
  )
   
}

export default MyApp
