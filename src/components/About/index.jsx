import { ComponentTitle, TextRegular } from "../../styles/Text"
import { Container, ContainerText, ContainerTitle } from "./style"

export const About = () => {
    return (
        <Container>
            <ContainerTitle>
                <ComponentTitle>O que é a CIAA</ComponentTitle>
            </ContainerTitle>

            <ContainerText>
                <TextRegular>
                A Comunidade Internacional Assexual e Arromântica (CIAA) é a maior comunidade para pessoas que se identificam com a letra "A" da sigla LGBTQIA+ e conta com mais de 1600 membros. Se você se identifica com uma dessas orientações, junte-se a nós e vamos dominar o mundo! 
                </TextRegular>
            </ContainerText>
        </Container>
    )
}