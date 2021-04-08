import { CSSProperties } from 'react';
import './ImageSlider.scss';
declare type imageObject = {
    url: string;
    isRepresentation: boolean;
    isShow: boolean;
};
declare type Props = {
    style?: CSSProperties;
    imageUrlList: imageObject[];
    imageWidth?: number;
    imageHeight?: number;
    isShowInformationIcon?: boolean;
};
declare const ImageSlider: ({ style, imageUrlList, imageWidth, imageHeight, isShowInformationIcon }: Props) => JSX.Element;
export default ImageSlider;
