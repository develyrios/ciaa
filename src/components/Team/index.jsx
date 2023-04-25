import { ComponentTitle, TextRegular } from "../../styles/Text"
import { UserLink } from "../UserLink"
import { Container, TeamList, ContainerTitle } from "./style"
import AdmsAt from "./users-at"

export const Team = () => {
    const getAdmsAt = () => {
        return AdmsAt.map( obj => {
            return <UserLink key={obj.id} userAt={obj.at} />
        })
    }

    return (
        <Container className="bg-azul-escuro">
            <ContainerTitle className="bg-azul-claro">
                <ComponentTitle>Conheça a administração</ComponentTitle>

                <TextRegular>E aproveite para nos seguir!</TextRegular>
            </ContainerTitle>

            <TeamList>
                {getAdmsAt()}
            </TeamList>
        </Container>
    )
}