import { MdLock, MdMail, MdPerson } from 'react-icons/md';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Column, Container, HaveCountText, LoginText, Row, SubtitleRegister, Text, Title, TitleRegister, Wrapper } from './styles'
import { Button } from '../../components/Button';

const Register =  () => {

    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleRegister>Comece agora grátis</TitleRegister>
                        <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister>
                        <form>
                            <Input placeholder="Nome completo" leftIcon={<MdPerson />}/>
                            <Input placeholder="E-mail" leftIcon={<MdMail />}/>
                            <Input placeholder="Password" type="password" leftIcon={<MdLock />}/>
                            <Button title="Cadastrar" variant="secondary"/>
                        </form>
                        <Text>
                                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </Text>
                        <Row>
                            <HaveCountText>Já tenho conta.</HaveCountText>
                            <LoginText>Fazer login</LoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );

};

export { Register };