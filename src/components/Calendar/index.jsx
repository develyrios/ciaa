import { ComponentTitle, TextRegular } from "../../styles/Text"
import { CalendarDay } from "../CalendarDay"
import { BackgroundContainer, Container, ContainerDays, ContainerText } from "./style"

export const Calendar = () => {
    return (
        <BackgroundContainer>
            <Container>
                <ContainerText>
                    <ComponentTitle>#NiverCIAA</ComponentTitle>
                    <TextRegular>
                        Acompanhe nosso calendário e venha comemorar o aniversário da comunidade conosco!
                    </TextRegular>
                </ContainerText>
                
                <ContainerDays>
                    <CalendarDay 
                        title="Segunda (01/05)"
                        text="Conheça a administração da comunidade e participe do sorteio de um exemplar do queridinho “Sem Amor”, de Alice Oseman."
                        />
                    <CalendarDay 
                        title="Terça (02/05)"
                        text="Participe da nossa excursão ao museu e poste na nossa comunidade suas criações mais estimáveis. Vale qualquer tipo de arte!"
                        />
                    <CalendarDay 
                        title="Quarta (03/05)"
                        text="Nada melhor do que joguinhos para comemorar nosso aniversário, então se divirta com nosso bingo exclusivo da CIAA."
                        />
                    <CalendarDay 
                        title="Quinta (04/05)"
                        text="No dia do nosso aniversário, é hora das selfies em mais uma edição de Selca da CIAA. Depois, acompanhe o sorteio do exemplar de “Sem Amor”."
                        />
                </ContainerDays>
            </Container>
        </BackgroundContainer>
    )
}