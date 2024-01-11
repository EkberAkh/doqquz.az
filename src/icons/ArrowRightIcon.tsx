import { Icon } from '@chakra-ui/react';
import React from 'react';
interface IProps {
    width: string;
    height: string;
}
const ArrowRightIcon: React.FC<IProps> = ({ width, height}) => {
    return (
        <Icon width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path fill='currentColor' d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
        </Icon>
    );
};
export default ArrowRightIcon;