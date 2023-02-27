
import Button from "../../../shared/buttons/button/button";
import Input from "../../../shared/inputs/input/Input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, Titleogin } from "../styles/loginScreen.style"
const LoginScreen = ()=>{

    return (
      <div>
        <ContainerLoginScreen>
        <BackgroundImage src='./background.png'/>

        <ContainerLogin>
          <LimitedContainer>
          <LogoImage src="./logo.png"/>
          <Titleogin level={2} type="secondary">Login</Titleogin>
            <Input title="Usuario"/>
            <Input title="Senha" />
            <Button  type="primary" margin="64px 0px 16px 0px">Entrar</Button>
          </LimitedContainer>
          
        </ContainerLogin>
        </ContainerLoginScreen>
      </div>
    ) 
}

export default LoginScreen;