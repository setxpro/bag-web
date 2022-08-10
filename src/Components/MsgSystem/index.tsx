import React from 'react';

import { LabelError } from './styles';

interface Props {
    text: string;
}

export const MsgSystem: React.FC<Props> = ({text}) => <LabelError>{text}</LabelError>
