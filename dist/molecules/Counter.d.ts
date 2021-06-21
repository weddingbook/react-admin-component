import './Counter.scss';
import { CSSProperties } from 'react';
export interface Props {
    style?: CSSProperties;
    defaultValue?: number;
    min?: number;
    max?: number;
}
declare const Counter: ({ style, defaultValue, min, max }: Props) => JSX.Element;
export default Counter;
