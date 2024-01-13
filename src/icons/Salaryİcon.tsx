import { Icon } from '@chakra-ui/react';
import React from 'react';
import { text } from 'stream/consumers';
interface IProps {
    width: string;
    height: string;
    color: string;
}
const SalaryIcon: React.FC<IProps> = ({ width, height, color}) => {
    return (
        <Icon width={`${width}px`} 
        height={`${height}px`}  
        color={`${color}`} 
        viewBox={`0 0 ${width} ${height}`} fill="none" >
            <path fill='currentColor' d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/>
        </Icon>
    );
};
export default SalaryIcon;