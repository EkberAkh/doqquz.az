import { Icon } from '@chakra-ui/react';
import React from 'react';
import { text } from 'stream/consumers';
interface IProps {
    width: string;
    height: string;
}
const NotificationIcon: React.FC<IProps> = ({ width, height}) => {
    return (
        <Icon width={`${width}px`} 
        height={`${height}px`}   
        viewBox={`0 0 ${width} ${height}`} fill="none" cursor={'pointer'} mt={'0.7rem'}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.6489 2.25 13.2762 2.34973 13.8667 2.53523C13.5954 2.95831 13.3805 3.421 13.2325 3.91269C12.8389 3.80651 12.4256 3.75 12 3.75C9.55613 3.75 7.5155 5.61353 7.29424 8.04737L6.84779 12.9584C6.76156 13.9068 6.19074 14.7432 5.33892 15.1691C4.97663 15.3502 4.75 15.7169 4.75 16.118V16.5C4.75 16.9142 5.08579 17.25 5.5 17.25H18.5C18.9142 17.25 19.25 16.9142 19.25 16.5V16.118C19.25 15.7169 19.0234 15.3502 18.6646 15.1708C17.8093 14.7432 17.2384 13.9068 17.1522 12.9584L16.9542 10.7798C17.4386 10.9214 17.9506 10.9981 18.4804 11L18.6461 12.8226C18.6852 13.2537 18.9447 13.6338 19.3319 13.8274L19.3354 13.8292C20.2024 14.2627 20.75 15.1488 20.75 16.118V16.5C20.75 17.7426 19.7426 18.75 18.5 18.75H14.75V19.25C14.75 20.7688 13.5188 22 12 22C10.4812 22 9.25 20.7688 9.25 19.25V18.75H5.5C4.25736 18.75 3.25 17.7426 3.25 16.5V16.118C3.25 15.1488 3.79764 14.2627 4.66459 13.8292L4.6681 13.8274C5.05529 13.6338 5.31475 13.2537 5.35395 12.8226L5.8004 7.91156C6.0919 4.70511 8.78032 2.25 12 2.25ZM10.75 18.75V19.25C10.75 19.9404 11.3096 20.5 12 20.5C12.6904 20.5 13.25 19.9404 13.25 19.25V18.75H10.75ZM15.0563 4.87149C15.1517 4.34545 15.3646 3.86035 15.6669 3.44441C17.0687 4.46718 18.0317 6.06475 18.1996 7.91156L18.298 8.99427C17.7362 8.96231 17.2099 8.79784 16.7498 8.53164L16.7058 8.04737C16.5895 6.7689 15.9713 5.64779 15.0563 4.87149Z" fill="#141124"></path>
        </Icon>
    );
};
export default NotificationIcon;