import './Cadastro.css';
import React, { useState } from 'react';


function FormularioCadastro() {
    const [tipo_usuario, setTipoUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleTipoUsuarioChange = (event) => {
        setTipoUsuario(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            tipo_usuario: tipo_usuario,
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            dt_nascimento: dtNasc,
            email: email,
            password: password,
        };

        fetch('http://localhost:8080/usuario/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                window.location.href = '/Perfil';
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
    };

    return (
        <div className='container-cadastro'>
            <div className='row-cadastro'>
                <div className='column-cadastro'>
                    <div className='texto-cadastro'>FAÇA SEU CADASTRO</div>
                    <form className='column-cadastro' onSubmit={handleSubmit}>
                        <div id='formularioCadastro'>
                            <div className='type'>
                                <label className='label-cadastro' htmlFor="tipo-usuario">TIPO DE USUÁRIO</label>
                                <select className="tipo-usuarioCadastro" name="tipo-usuario" value={tipo_usuario} onChange={handleTipoUsuarioChange}>
                                    <option value="">Insira seu tipo de usuário</option>
                                    <option value='profissional'>Profissional</option>
                                    <option value='ajudante'>Ajudante</option>
                                    <option value='contratante'>Contratante</option>
                                </select>
                            </div>
                            <div className='labelform-cadastro'>
                                <label>NOME</label>
                                <input className='registro-cadastro' placeholder='Nome' type="text" id="nome" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                            </div>
                            <div className='labelform-cadastro'>
                                <label>SOBRENOME</label>
                                <input className='registro-cadastro' placeholder='Sobrenome' type="text" id="sobrenome" name="sobrenome" value={sobrenome} onChange={(event) => setSobrenome(event.target.value)} />
                            </div>
                            <div className='labelform-cadastro'>
                                <label className='label'>CPF</label>
                                <input className='registro-cadastro' placeholder='CPF' type="text" id="cpf" name="cpf" value={cpf} onChange={(event) => setCpf(event.target.value)} />
                            </div>
                            <div className='labelform-cadastro'>
                                <label className='label'>DATA DE NASCIMENTO</label>
                                <input className='registro-cadastro' placeholder='Data de nascimento' type="date" id="data-nascimento" name="data-nascimento" value={dtNasc} onChange={(event) => setDtNasc(event.target.value)} />
                            </div>
                            <div className='labelform-cadastro'>
                                <label className='label'>EMAIL</label>
                                <input className='registro-cadastro' placeholder='Email' type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div className='labelform-cadastro'>
                                <label className='label'>SENHA</label>
                                <input className='registro-cadastro' placeholder='Senha' type="password" id="senha" name="senha" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className='labelform-cadastro'>
                                <label className='label'>CONFIRMAÇÃO DE SENHA</label>
                                <input className='registro-cadastro' placeholder='Confirmação de senha' type="password" id="confirmar-senha" name="confirmar-senha" value={confirmarSenha} onChange={(event) => setConfirmarSenha(event.target.value)} />
                            </div>
                            <div id='cadastro-form'>
                                <button type="submit">CADASTRAR</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default FormularioCadastro;