import { ComponentTitle, TextRegular } from "../../styles/Text"
import { Container, ContainerText, ContainerTitle } from "./style"

export const About = () => {
    return (
        <Container>
            <ContainerTitle className="bg-azul-claro">
                <ComponentTitle>O que é a CIAA</ComponentTitle>
            </ContainerTitle>

            <ContainerText className="bg-azul-escuro">
                <TextRegular>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra ut orci non pulvinar. In ultricies purus sed enim interdum, ac viverra dolor fermentum. In ac malesuada est. Nulla facilisi. Maecenas consectetur lobortis massa at commodo. Aliquam vestibulum, risus et imperdiet malesuada, ex nibh rhoncus mauris, in tristique eros dui et urna. Phasellus luctus molestie est et placerat. 
                </TextRegular>
            </ContainerText>
        </Container>
    )
}