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
        viewBox={`0 0 ${width} ${height}`} fill="none">
            <path fill='currentColor' d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" />
        </Icon>
    );
};
export default CompanyIcon;