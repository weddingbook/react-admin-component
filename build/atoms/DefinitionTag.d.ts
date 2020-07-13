/// <reference types="react" />
import './DefinitionTag.scss';
declare type Props = {
    children: string | object;
    title: string;
    direction?: 'row' | 'column';
};
declare const DefinitionTag: ({ children, title, direction }: Props) => JSX.Element;
export default DefinitionTag;
