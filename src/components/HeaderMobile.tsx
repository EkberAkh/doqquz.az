import {
    Image,
    
  } from "@chakra-ui/react";
  import logoMob from "../../public/images/logoMob.svg";
export const HeaderMobile=()=>{
    return (
        <>
        <Image
         src={logoMob.src}
         alt="Logo"
         h="40px"
         pr="16px"
         borderRight="1px solid rgb(102, 102, 102)"
       />
     </>
    )
}