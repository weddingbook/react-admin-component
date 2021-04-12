import React, {CSSProperties} from 'react';
import './Modal.scss';

type Props = {
    children?: object,
    style?: CSSProperties,
    title?: string,
    subTitle?: string,
    size?: 'small' | 'medium' | 'large',
    onClickInBackground?: () => void,
    cancelButtonComponent?: object,
    actionButtonComponent?: object,
    footerComponent?: object,
	withSection?: boolean,
    noScroll?: boolean,
}

const Tooltip = ({}: Props) => {
    return (
        <div></div>
    )
}

export default Tooltip;
