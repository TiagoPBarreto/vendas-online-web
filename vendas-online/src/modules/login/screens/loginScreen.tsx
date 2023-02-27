
import Input from "../../../shared/inputs/input/Input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.style"
const LoginScreen = ()=>{

    return (
      <div>
        <ContainerLoginScreen>
        <BackgroundImage src='./background.png'/>

        <ContainerLogin>
          <LimitedContainer>
          <LogoImage src="./logo.png"/>
            <Input title="Usuario"/>
            <Input title="Senha" />
          </LimitedContainer>
          
        </ContainerLogin>
        </ContainerLoginScreen>
      </div>
    ) 
}

export default LoginScreen;