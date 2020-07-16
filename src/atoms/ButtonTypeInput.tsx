import React, { FormEvent } from 'react';
import './ButtonTypeInput.scss';
import Icon from 'react-eva-icons';


type Props = {
    type: 'checkbox' | 'radio'
    checked: boolean,
    disabled?: boolean,
    title: string,
    onChange: (e: FormEvent) => void,
}

const ButtonTypeInput = ({ type, title, checked, disabled = false, onChange }: Props) => {
    return (
        <>
            <label tabIndex={0} className={`btn-type-input ${checked && 'checked'} ${disabled && 'disabled'}`} htmlFor={title}>
                <input className='only-sr' type={type} checked={checked} id={title} onChange={onChange} disabled={disabled} />
                {(checked) &&
                    <span>
                        <Icon
                            name="checkmark-outline"
                            size="14"
                        />
                    </span>
                }
                {title}
            </label>
        </>
    )
}

export default ButtonTypeInput
