import React from 'react';
import { InputType } from '../../Types/InputType';

import { InputArea } from './styles';

export const Input = ({ 
        type,
        name,
        placeholder,
        value,
        onChange
    }:InputType) => 
        <InputArea 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            required 
            value={value} 
            onChange={onChange}
        />
