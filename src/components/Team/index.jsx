import { ComponentTitle, TextRegular } from "../../styles/Text"
import { UserLink } from "../UserLink"
import { Container, TeamList, ContainerTitle, TeamListBackgroungContainer } from "./style"
import AdmsAt from "./users-at"

export const Team = () => {
    const getAdmsAt = () => {
        return AdmsAt.map( obj => {
            return <UserLink key={obj.id} userAt={obj.at} />
        })
    }

    return (
        <Container>
            <ContainerTitle>
                <ComponentTitle>Conheça a administração</ComponentTitle>

                <TextRegular>E aproveite para nos seguir!</TextRegular>
            </ContainerTitle>

            <TeamListBackgroungContainer className="bg-azul-escuro">
                <TeamList>
                    {getAdmsAt()}
                </TeamList>
            </TeamListBackgroungContainer>
        </Container>
    )
}