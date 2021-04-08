import './SectionContainer.scss';
declare type Props = {
    children: object;
    direction: 'row' | 'column';
};
declare const SectionContainer: ({ children, direction }: Props) => JSX.Element;
export default SectionContainer;
