import { useState, useEffect } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';


const styles = {
    alignment: 'flex flex-row items-center justify-center',
    marginPadding: 'py-[20px] px-[20px] sm:px-[40px] md:px-[100px] lg:px-[150px]',
    heightWidth: '',
    textFont: 'font-monty',
    colors: 'text-white bg-ke_blue',
    animations: 'transition-all duration-[100ms] ease-in',
    shadowBorder: 'border-b-[1px] border-black',

    titleTextFont: 'font-bold text-[20px] sm:text-[25px] md:text-[30px]',
    titleColor: 'text-ke_orange',

    navigationMarginPadding: 'ml-auto',
    navigationAlignment: 'hidden md:flex flex-row items-center justify-center gap-x-[40px]',
    navigationTextFont: 'text-[25px]',
    navigationLinkDiv: 'flex flex-col group cursor-pointer',
    navigationLinkUnderline: 'bg-ke_orange ml-auto h-[6px] w-[70px] group-hover:w-full rounded transition-all duration-[200ms] ease-in-out',

    toggleAlignment: 'flex md:hidden',
    toggleTextFont: 'text-[25px] sm:text-[30px]',
}


const Navbar = () => {

    const [navToggle, setNavToggle] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setNavToggle(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        
    }, [])
    
    return (
        <nav className={`${styles.alignment} ${styles.marginPadding} ${styles.heightWidth} ${styles.textFont} ${styles.colors} ${styles.animations} ${styles.shadowBorder}`}>
            
            <heading className={`${styles.titleTextFont}`}>
                <span>KANISHKA</span> <span className={`${styles.titleColor}`}>ENTERPRISE</span>
            </heading>

            <navigation className={`${styles.navigationMarginPadding} ${styles.navigationAlignment} ${styles.navigationTextFont}`}>
                <div className={`${styles.navigationLinkDiv}`}>
                    <a>About Us</a>
                    <div className={`${styles.navigationLinkUnderline}`} />
                </div>
                <div className={`${styles.navigationLinkDiv}`}>
                    <a>Contact Us</a>
                    <div className={`${styles.navigationLinkUnderline} w-[90px]`} />
                </div>
            </navigation>

            <div onClick={() => setNavToggle((prev) => !prev)} className={`relative ${styles.navigationMarginPadding} ${styles.toggleTextFont} ${styles.toggleAlignment}`}>
                
                <RxHamburgerMenu className={`${navToggle ? 'opacity-0 rotate-90' : 'opacity-100'} transition-all duration-[200ms] ease-in`} />
                <RxCross1 className={`absolute ${navToggle ? 'opacity-100 text-ke_orange' : 'opacity-0 -rotate-90'} transition-all duration-[200ms] ease-in`}/>

            </div>

            <div className={`md:opacity-0 md:z-[1-] right-[10px] sm:right-[20px] top-[80px] sm:top-[90px] absolute bg-ke_blue rounded-lg p-[20px] ${navToggle ? 'opacity-100 z-[1]' : 'opacity-0 z-[-1] translate-y-[-100px]'} flex flex-col gap-[10px] items-center justify-center transition-all duration-[200ms] ease-in shadow-md shadow-black font-semibold`}>
                
                <a>About Us</a>

                <div className='border-b w-[90%] border-white/[0.5]'></div>
                
                <a>Contact Us</a>
                
            </div>
            
        </nav>
    )
}


export default Navbar
