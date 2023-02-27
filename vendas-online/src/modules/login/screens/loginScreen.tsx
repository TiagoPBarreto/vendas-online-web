
import { useState } from "react";
import Button from "../../../shared/buttons/button/button";
import Input from "../../../shared/inputs/input/Input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, Titleogin } from "../styles/loginScreen.style"

const LoginScreen = ()=>{

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(event.target.value )
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value )
  }

  const handleLogin = ()=>{
    alert (`username: ${username}, password: ${password}`)
  }

    return (
      <div>
        <ContainerLoginScreen>
        <BackgroundImage src='./background.png'/>

        <ContainerLogin>
          <LimitedContainer>
          <LogoImage src="./logo.png"/>
          <Titleogin level={2} type="secondary">Login</Titleogin>
            <Input title="Usuario" margin="32px 0px 0px" onChange={handleUsername} value={username}/>
            <Input type="password" title="Senha" margin="32px 0px 0px" onChange={handlePassword} value={password}/>
            <Button  type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>Entrar</Button>
          </LimitedContainer>
          
        </ContainerLogin>
        </ContainerLoginScreen>
      </div>
    ) 
}

export default LoginScreen;