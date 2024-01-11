import { Icon } from '@chakra-ui/react';
import React from 'react';
import { text } from 'stream/consumers';
interface IProps {
    width: string;
    height: string;
    color: string;
}
const CompanyIcon: React.FC<IProps> = ({ width, height, color}) => {
    return (
        <Icon width={`${width}px`} 
        height={`${height}px`}  
        color={`${color}`} 
        viewBox={`0 0 ${width} ${height}`} fill="none" >
            <path fill='currentColor' d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
        </Icon>
    );
};
export default CompanyIcon;