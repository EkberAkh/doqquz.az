import { Icon } from '@chakra-ui/react';
import React from 'react';
import { text } from 'stream/consumers';
interface IProps {
    width: string;
    height: string;
}
const NotificationManIcon: React.FC<IProps> = ({ width, height}) => {
    return (
        <Icon width={`${width}px`} 
        height={`${height}px`}   
        viewBox={`0 0 ${width} ${height}`} fill="none" cursor={'pointer'}>
            <circle cx="20" cy="20" r="20" fill="#F4F5F4"></circle>
            <path d="M17 18C18.6569 18 20 16.6569 20 15C20 13.3431 18.6569 12 17 12C15.3431 12 14 13.3431 14 15C14 16.6569 15.3431 18 17 18Z" stroke="#4E5251" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M22 18C23.6569 18 25 16.6568 25 15C25 13.3432 23.6569 12 22 12" stroke="#4E5251" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M19 21H15C12.7909 21 11 22.7909 11 25C11 26.6569 12.3432 28 14 28H20C21.6569 28 23 26.6569 23 25C23 22.7909 21.2091 21 19 21Z" stroke="#4E5251" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M25 21C27.2091 21 29 22.7909 29 25C29 26.6569 27.6569 28 26 28" stroke="#4E5251" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </Icon>
    );
};
export default NotificationManIcon;