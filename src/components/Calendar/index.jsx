import { ComponentTitle, TextRegular } from "../../styles/Text"
import { CalendarDay } from "../CalendarDay"
import { Container, ContainerDays, ContainerText } from "./style"

export const Calendar = () => {
    return (
        <Container>
            <ContainerText>
                <ComponentTitle>#NiverCIAA</ComponentTitle>
                <TextRegular>
                    Acompanhe nosso calendário e venha comemorar o aniversário da comunidade conosco!
                </TextRegular>
            </ContainerText>
            
            <ContainerDays>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </ContainerDays>
        </Container>
    )
}