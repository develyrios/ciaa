import { CalendarText, CalendarTitle } from "../../styles/Text"
import { Container, ContainerDescription, ContainerTitle } from "./style"

export const CalendarDay = () => {
    return (
        <Container className="bg-bege">
            <ContainerTitle>
                <CalendarTitle>Segunda (01/04)</CalendarTitle>
            </ContainerTitle>

            <ContainerDescription>
                <CalendarText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra ut orci non.
                </CalendarText>
                <CalendarText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra ut orci non.
                </CalendarText>
            </ContainerDescription>
        </Container>
    )
}