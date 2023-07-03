import React, { useState } from 'react';
import "./Login.css";
import Logo from "../../img/logo-azul-claro.svg";
import Apple from "./img/Apple.png";
import Gmail from "./img/google.png";
import Facebook from "./img/facebook.png";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        fetch('http://localhost:8080/usuario/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log('Login bem-sucedido!');
                    window.location.href = '/Perfil';

                } else {
                    console.log('Credenciais inválidas. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
    };

    return(
        <div className='container-login'>
            <div className='text-login'>
                <h1>ENTRE NA SUA CONTA</h1>
            </div>
            <div className='conteudo-login'>
                <div>
                    <a className='logo' href="/">
                        <img src={Logo} id='img-logo' alt="logo da murumuru" />
                    </a>
                </div>
                <div>
                    <form className='login-form' onSubmit={handleLogin}>

                        <div className='inputbox-login'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='email' placeholder='digite seu email' 
                            value={email} onChange={(e) => setEmail(e.target.value)} required/>

                            <label htmlFor='senha'>Senha</label>
                            <input id='senha' type='password' placeholder='senha'
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />

                            <div className='esqueceu-senha'>
                                <a id='link' href='#'>esqueceu sua senha?</a>
                            </div>

                            <input id='submit' type='submit' value='Login'/>
                        </div>
                    </form>
                    <div className='hr-form'>
                        <hr/><span> ou continue com </span><hr/>
                    </div>
                    <div className="login-externo">
                            <div className="logo-externo">
                                <a href="https://encurtador.com.br/diuHT">
                                    <img src={Gmail} alt="logo gmail" />
                                </a>
                            </div>
                            <div className="logo-externo">
                                <a href="https://www.icloud.com/">
                                    <img src={Apple} alt="logo apple" />
                                </a>
                            </div>
                            <div className="logo-externo">
                                <a href="https://pt-br.facebook.com/login/device-based/regular/login/">
                                    <img src={Facebook} alt="logo facebook" />
                                </a>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login