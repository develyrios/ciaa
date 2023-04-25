import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import GlobalStyle from "./styles/GlobalStyle"

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}
