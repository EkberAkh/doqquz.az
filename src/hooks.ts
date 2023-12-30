import { usePathname  } from "next/navigation";

export const useCurrentLang = ()=>{
    const nextPathName = usePathname();
    const lang = nextPathName.split('/')[1]
    return lang
}