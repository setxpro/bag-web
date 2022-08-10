import React, { useState } from 'react';
import { Button } from '../../../../Components/Button';
import { Input } from '../../../../Components/Inputs';
import { Link } from 'react-router-dom';

import * as C from './styles';
import { MsgSystem } from '../../../../Components/MsgSystem';

const FormLogin: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();

        if (!username) {
            setMessage('Por favor, insira ao menos um login.');
            return;
        }

        if (!password) {
            setMessage('Por favor, insira ao menos uma senha.');
            return;
        }
        
    }

    return (
        <C.Container>
            <C.ContentFormArea>
                <C.FormContent>
                    <MsgSystem text={message}/>
                    <Input type='text' name="username" placeholder='Username' value={username} onChange={e =>[setUsername(e.target.value), setMessage('')]}/>
                    <Input type='password' name="password" placeholder='Password' value={password} onChange={e => [setPassword(e.target.value), setMessage('')]}/>
                    <C.ContentBtns>
                        <Button onClick={handleSubmit} title='Logar no Bagweb'/>
                        <Link to="">Esqueceu sua senha ?</Link>
                    </C.ContentBtns>
                </C.FormContent>
            </C.ContentFormArea>
            <C.FormFooter>
                <p>@ Copyright <a href="">BAGAGGIO</a> 2022</p>
            </C.FormFooter>
        </C.Container>
    );
}

export default FormLogin;