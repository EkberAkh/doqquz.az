import { Icon } from '@chakra-ui/react';
import React from 'react';
import { text } from 'stream/consumers';
interface IProps {
    width: string;
    height: string;
    color: string;
}
const NotifiedIcon: React.FC<IProps> = ({ width, height, color}) => {
    return (
        <Icon width={`${width}px`} 
        height={`${height}px`}  
        color={`${color}`} 
        viewBox={`0 0 ${width} ${height}`} fill="none" cursor={'pointer'} mt={'7px'}>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.23077 3H18.4615C19.8635 3 21 4.13651 21 5.53846V14.7692C21 16.1712 19.8635 17.3077 18.4615 17.3077H17.3077V18.5934C17.3077 19.9225 16.2302 21 14.9011 21H6.46154C4.54978 21 3 19.4502 3 17.5385V9.0989C3 7.76978 4.07747 6.69231 5.40659 6.69231H6.69231V5.53846C6.69231 4.13651 7.82882 3 9.23077 3ZM6.69231 8.07692H5.40659C4.84217 8.07692 4.38462 8.53448 4.38462 9.0989V17.5385C4.38462 18.6855 5.31449 19.6154 6.46154 19.6154H14.9011C15.4655 19.6154 15.9231 19.1578 15.9231 18.5934V17.3077H9.23077C7.82882 17.3077 6.69231 16.1712 6.69231 14.7692V8.07692ZM9.23077 4.38462C8.59352 4.38462 8.07692 4.90121 8.07692 5.53846V14.7692C8.07692 15.4065 8.59352 15.9231 9.23077 15.9231H18.4615C19.0988 15.9231 19.6154 15.4065 19.6154 14.7692V5.53846C19.6154 4.90121 19.0988 4.38462 18.4615 4.38462H9.23077Z" fill="black" fillOpacity="0.87"></path>
        </Icon>
    );
};
export default NotifiedIcon;