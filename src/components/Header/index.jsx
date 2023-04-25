import { Calendar } from "../Calendar"
import { Navbar } from "../Navbar"
import { Container } from "./style"

export const Header = () => {
    return (
        <Container className="bg-azul-claro">
            <Navbar />
            <Calendar />
        </Container>
    )
}