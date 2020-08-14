import { CSSProperties } from 'react';
import './ImageSlider.scss';
declare type Props = {
    style?: CSSProperties;
    imageUrlList: string[];
    imageWidth?: number;
    imageHeight?: number;
};
declare const ImageSlider: ({ style, imageUrlList, imageWidth, imageHeight }: Props) => JSX.Element;
export default ImageSlider;
