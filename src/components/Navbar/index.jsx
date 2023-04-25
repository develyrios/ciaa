import { ComponentTitle } from "../../styles/Text"
import { Container } from "./style"
import Logo from "../../assets/logo.png"

export const Navbar = () => {
    return (
        <Container className="bg-azul-escuro">
            <img src={Logo} alt="Brasão da CIAA" />
            <ComponentTitle>CIAA |</ComponentTitle>
            <a href="https://twitter.com/i/communities/1521909846991380482">
            <ComponentTitle>Acesse aqui</ComponentTitle>
            </a>
        </Container>
    )
}