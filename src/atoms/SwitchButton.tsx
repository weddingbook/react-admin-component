import React from 'react';
import './SwitchButton.scss';

type Props = {
    toggleHeight?: number,
    toggleType?: 'normal' | 'text',
    toggleValue: boolean,
    onClick: Function,
    onText?: string,
    offText?: string,

}
const SwitchButton = ({ toggleHeight = 24, toggleType = 'normal', onText, offText, toggleValue, onClick }: Props) => {
    const toggleButtonHeight = toggleHeight * 5 / 6;

    const onToggle = () => {
        onClick(!toggleValue)
    }
    return (
        <button style={{ height: toggleHeight }} onClick={onToggle} className={`btn-container toggle-${toggleValue ? 'on' : 'off'} type-text btn-text-${toggleValue ? 'on' : 'off'}`}>
            {(toggleType === 'text' && onText && offText) &&
                <span className='btn-text' style={{ padding: `${toggleValue ? `0 ${toggleButtonHeight}px 0 0` : `0 0 0 ${toggleButtonHeight}px`}` }}>
                    {toggleValue ? onText : offText}
                </span>
            }
            <div
                className='btn-toggle'
                style={{
                    position: 'absolute',
                    width: toggleButtonHeight,
                    height: toggleButtonHeight,
                    left: `${toggleValue ? `calc(100% - ${toggleButtonHeight + 3}px)` : '3px'}`
                }}
            >
            </div>
        </button>
    )
}

export default SwitchButton
