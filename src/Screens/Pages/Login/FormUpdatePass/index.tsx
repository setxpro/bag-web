import React, { useState } from 'react';
import { Button } from '../../../../Components/Button/BtnForm';
import { Input } from '../../../../Components/InputsSingin';
import { Link, useNavigate } from 'react-router-dom';

import * as C from './styles';
import { MsgSystem } from '../../../../Components/MsgSystem';

const FormUpdatePass: React.FC = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [toggleMessage, setToggleMessage] = useState(false);

    const handleSubmit = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();

        if (!username) 
        {
            setMessage('Insira ao menos um nome válido!')
            return;
        }
        if (!password) 
        {
            setMessage('Insira ao menos uma nova senha.')
            return;
        }

        if (!passwordConfirm) 
        {
            setMessage('Por favor, insira novamente a senha.')
            return;
        }
        if (password !== passwordConfirm) 
        {
            setMessage('As senhas não são iguais.')
            return;
        }

        if (password && passwordConfirm) 
        {
            setLoading(true);
            console.log({
                user: username,
                pass: password
            })
            setTimeout(() => {
                setLoading(false);
                setToggleMessage(true);
            }, 3000)
        }

    }

    return (
        <C.Container>
            <C.ContentTitleArea>
                <h1>{!toggleMessage ? 'Atualizar' : 'Sucesso'}</h1>
            </C.ContentTitleArea>
            {!toggleMessage ? 
            <C.ContentFormArea>
                <C.FormContent>
                    <MsgSystem text={message}/>
                    <Input type='text' name="username" placeholder='Nome de usuário' value={username} onChange={e =>[setUsername(e.target.value), setMessage('')]}/>
                    <Input type='password' name="password" placeholder='Nova senha' value={password} onChange={e => [setPassword(e.target.value), setMessage('')]}/>
                    <Input type='password' name="password" placeholder='Confirmar nova senha' value={passwordConfirm} onChange={e => [setPasswordConfirm(e.target.value), setMessage('')]}/>
                    <C.ContentBtns>
                        <Button onClick={handleSubmit} title='Atualizar'/>
                    </C.ContentBtns>
                </C.FormContent>
            </C.ContentFormArea>
            : <div className='message'><Link to="/login">A senha foi alterada! click <strong>aqui</strong> para retornar a página login</Link></div>}
            
            <C.FormFooter>
                <p>© Copyright <a href="">BAGAGGIO</a> 2022</p>
            </C.FormFooter>
        </C.Container>
    );
}

export default FormUpdatePass;