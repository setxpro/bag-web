import React, { useState } from 'react';
import { Button } from '../../../../Components/Button/BtnForm';
import { Input } from '../../../../Components/InputsSingin';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

import * as C from './styles';
import { MsgSystem } from '../../../../Components/MsgSystem';
import FormLoginSpinner from '../../../../Components/Spinner/FormLogin';

const FormForgotPass: React.FC = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [toggleName, setToggleName] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        ev.preventDefault();

        let removeOne = phone.replace("+55 (","")
        let removeTwo = removeOne.replace(") ", "")

        let regEx = /^[a-zA-Z0-9]*$/;

        if (!name) 
        {
            setMessage('Por favor, insira ao menos um nome.')
            return;
        }

        if (regEx.test(name)) 
        {
            setMessage('Insira ao menos um nome válido.')
            return;
        }

        if (!phone) 
        {
            setMessage("Insira ao menos um numero de telefone.")
            return;
        }

        if (name && phone) 
        {
            
            setLoading(true);
            console.log({
                name: name,
                cel: removeTwo
            })
            setTimeout(() => {
                setLoading(false);
                setToggleName(true);
            }, 3000)
            navigate('/update-pass');
        }

    }

    return (
        <C.Container>
    <C.ContentTitleArea>
        <h1>BAGWEB</h1>
    </C.ContentTitleArea>
    <C.ContentFormArea>
        <C.FormContent>
            <MsgSystem text={message}/>
                <Input type='text' name="name" placeholder='Nome e sobrenome' value={name} onChange={e => [setName(e.target.value), setMessage('')]}/>
                <InputMask mask="+99 (99) 999999999" className='mask' value={phone} onChange={e => [setPhone(e.target.value), setMessage('')]} placeholder='Celular'/>
            <C.ContentBtns>
                {   
                    loading 
                        ? <FormLoginSpinner/> 
                        : <Button 
                            onClick={handleSubmit} 
                            title={ !toggleName 
                                ? 'Enviar' 
                                : 'Enviado com Sucesso!'}
                        />
                }
            </C.ContentBtns>
        </C.FormContent>
    </C.ContentFormArea>
    <C.FormFooter>
        <p>© Copyright <a href="">BAGAGGIO</a> 2022</p>
    </C.FormFooter>
</C.Container>
    )
}

export default FormForgotPass;