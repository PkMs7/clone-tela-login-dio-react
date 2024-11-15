import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles';
import { useNavigate } from 'react-router-dom';

const Feed = () => {

  const navigate = useNavigate();

  const handleClickHome = () => {
      navigate('/')
  }

  return (
    <>
        <Header autenticado={true} onClick={handleClickHome}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Patrick Marques" image="https://avatars.githubusercontent.com/u/100943409?s=48&v=4=" percentual={25}/>
                <UserInfo nome="Patrick Marques" image="https://avatars.githubusercontent.com/u/100943409?s=48&v=4=" percentual={65}/>
                <UserInfo nome="Patrick Marques" image="https://avatars.githubusercontent.com/u/100943409?s=48&v=4=" percentual={45}/>
                <UserInfo nome="Patrick Marques" image="https://avatars.githubusercontent.com/u/100943409?s=48&v=4=" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 