import React, {CSSProperties} from 'react';
import './TagContainer.scss';
type Props = {
	children: JSX.Element;
	style?: CSSProperties
	direction?: 'row' | 'column';
}

const TagContainer = ({children, style, direction = 'row'}: Props) => {
    return (
        <div className={`tag-container ${direction}`} style={{...style}}>
			{children}
		</div>
    )
}

export default TagContainer;
