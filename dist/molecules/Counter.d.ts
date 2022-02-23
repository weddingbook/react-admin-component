import './Counter.scss';
import { CSSProperties } from 'react';
export interface Props {
    style?: CSSProperties;
    defaultValue?: number;
    min?: number;
    max?: number;
    onChange?: (n: number) => void;
}
declare const Counter: ({ style, defaultValue, min, max, onChange }: Props) => JSX.Element;
export default Counter;
