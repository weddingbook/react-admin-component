import { FormEvent } from 'react';
import './ButtonTypeInput.scss';
declare type Props = {
    type: 'checkbox' | 'radio';
    checked: boolean;
    disabled?: boolean;
    title: string;
    onChange: (e: FormEvent) => void;
};
declare const ButtonTypeInput: ({ type, title, checked, disabled, onChange }: Props) => JSX.Element;
export default ButtonTypeInput;
