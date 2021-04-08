import './ViewMore.scss';
declare type Props = {
    onClickMoreButton: (count: number) => void;
    nowShowingRow: number;
    total: number;
};
declare const ViewMore: ({ nowShowingRow, total, onClickMoreButton }: Props) => JSX.Element;
export default ViewMore;
