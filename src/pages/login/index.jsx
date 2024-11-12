import { 
    Column,
    Container,
    CriarText,
    EsqueciText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper,
} from "./styles";
import { MdEmail, MdLock } from 'react-icons/md';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Login = () => {

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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login make the change._</SubtitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                            <Input placeholder="Password" leftIcon={<MdLock />}/>
                        </form>
                        <Button title="Entrar" variant="secondary" />
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )

};

export { Login };