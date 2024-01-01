import { Icon } from '@chakra-ui/react';
import React from 'react';
interface IProps {
    width: string;
    height: string;
}
const ArrowForwardIcon: React.FC<IProps> = ({ width, height, mr }) => {
    return (
        <Icon width={`${width}px`} height={`${height}px`} mr={`${mr}px`} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path fill='currentColor' d="M 10.09 15.59 L 11.5 17 l 5 -5 l -5 -5 l -1.41 1.41 L 12.67 11 H 3 v 2 h 9.67 l -2.58 2.59 Z M 19 3 H 5 c -1.11 0 -2 0.9 -2 2 v 4 h 2 V 5 h 14 v 14 H 5 v -4 H 3 v 4 c 0 1.1 0.89 2 2 2 h 14 c 1.1 0 2 -0.9 2 -2 V 5 c 0 -1.1 -0.9 -2 -2 -2 Z" />
        </Icon>
    );
};
export default ArrowForwardIcon;