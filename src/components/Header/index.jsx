import { Button } from "../Button";
import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";
import logo from '../../assets/logo-dio.png'

const Header = ({autenticado, onClick}) => {

    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" onClick={onClick}/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                    <>
                        <UserPicture  src="https://avatars.githubusercontent.com/u/100943409?s=48&v=4="/>
                    </>) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    );

};

export { Header };