import { Header, Title } from '../styles/app';
import Logo from '../styles/assets/logo.png';

export default function HeadTonner(){
  return(
    <>
      <Header>
        <img src={Logo} alt="Flex" />
        <Title>Welcome to the Flex System</Title>
      </Header>
      
    </>
  );
}