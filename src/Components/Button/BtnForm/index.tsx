import { ButtonType } from '../../../Types/ButtonType';
import { Btn } from './styles';

export const Button = ( { title, onClick } : ButtonType ) => <Btn onClick={onClick}>{title}</Btn>