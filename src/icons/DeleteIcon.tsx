import { Icon } from '@chakra-ui/react';
import React from 'react';
interface IProps {
    width: string;
    height: string;
    color: string;
}
const DeleteIcon: React.FC<IProps> = ({ width, height, color}) => {
    return (
        <Icon width={`${width}px`} 
        height={`${height}px`}  
        color={`${color}`} 
        viewBox={`0 0 ${width} ${height}`} fill="none" cursor={'pointer'}>
            <path fill='currentColor' d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
        </Icon>
    );
};
export default DeleteIcon;