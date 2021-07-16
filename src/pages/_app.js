import Footer from '../componentes/footer/footer'
import Header from '../componentes/Header/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return(
    <>
    <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
   
}

export default MyApp
