import { Icon } from '@chakra-ui/react';
import React from 'react';
interface IProps {
    width: string;
    height: string;
}
const LeftIcon: React.FC<IProps> = ({ width, height }) => {
    return (
        <Icon width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path fill='currentColor' d="M 7 10 l 5 5 l 5 -5 H 7 Z" />
        </Icon>
    );
};
export default LeftIcon;