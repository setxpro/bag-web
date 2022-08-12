import { ButtonIconType, ButtonType } from '../../../Types/ButtonType';
import { Btn } from './styles';

export const BtnIcon = ( { children , onClick } : ButtonIconType ) => <Btn onClick={onClick}>{children}</Btn>