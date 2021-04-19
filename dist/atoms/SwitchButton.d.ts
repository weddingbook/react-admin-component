import './SwitchButton.scss';
declare type Props = {
    toggleHeight?: number;
    toggleType?: 'normal' | 'text';
    toggleValue: boolean;
    onClick: Function;
    onText?: string;
    offText?: string;
};
declare const SwitchButton: ({ toggleHeight, toggleType, onText, offText, toggleValue, onClick }: Props) => JSX.Element;
export default SwitchButton;
