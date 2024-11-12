import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles';
import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {

  return (
    <CardContainer>
      <ImageBackground src="https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png"/>
      <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/100943409?s=48&v=4="/>
            <div>
            <h4>Patrick Marques</h4>
            <p>Há 8 minutos</p>
            </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para o Bootcamp XP Inc. </h4>
          <p>Projeto feito no curso de React para o Bootcamp XP Inc. <strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript #React</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );

};

export { Card };

