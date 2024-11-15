import { 
    Container,
    TextContent,
    Title,
    TitleHighlight,
 } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImage from '../../assets/banner.png';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleClickStart = () => {
        navigate('/login')
    }

    return(
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente
                            <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickStart} />
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal" />
                </div>
            </Container>
        </>
    );

};

export { Home };