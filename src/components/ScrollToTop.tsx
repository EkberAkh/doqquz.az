import { ChevronUpIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    // const [isVisible, setIsVisible] = useState(false)
    // useEffect(() => {
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    //     const scrollY = window.scrollY;

    //     const triggerPosition = 200;
    //     if(scrollY > triggerPosition) {
    //         setIsVisible(true)
    //     }
        
    // }, [scrollY,setIsVisible]);

    return (
        <div>

            <button
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                style={{
                    position: 'fixed',
                    width: '2.5rem',
                    height: '2.5rem',
                    fontSize: '1.5rem',
                    bottom: '1rem',
                    right: '1rem',
                    borderRadius: '100%',
                    backgroundColor: '#2a41e8',
                    color: '#fff',
                }}
            >
                <ChevronUpIcon />
            </button>
        </div>
    );
}
