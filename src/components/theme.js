import { MdDarkMode, MdLightMode } from "react-icons/md";
import '../stylesheet/compsStyle/theme.css'; 
import { useEffect, useState } from "react";

export default function Theme () {
    const [theme, setTheme] = useState('light'); 
    const [themeIcon, setThemeIcon] = useState(<MdLightMode color="black" />);
    const BodySelector = document.querySelector("body"); 

    useEffect(() => {
        const selectedTheme = localStorage.getItem('selectedTheme');
        if(selectedTheme === "dark") {
            setTheme('dark'); 
            setThemeIcon(<MdDarkMode size={'23px'} color="white" />);
            BodySelector.setAttribute('data-theme' , 'dark');
            
        } else {
            setTheme('light');
            setThemeIcon(<MdLightMode size={'23px'} color="black" />); 
            BodySelector.setAttribute('data-theme' , 'light');
        }
    }, [BodySelector]);

    const toggleTheme = () => {
        if(theme === "dark") {
            localStorage.setItem("selectedTheme" , "light");
            setTheme('light');
            setThemeIcon(<MdLightMode size={'23px'}  color="black" />); 
            BodySelector.setAttribute('data-theme' , 'light');
            BodySelector.classList.add('theme-transition');
        } else {
            localStorage.setItem("selectedTheme" , "dark");
            setTheme('dark');
            setThemeIcon(<MdDarkMode size={'23px'} color="white" />);
            BodySelector.setAttribute('data-theme' , 'dark');
            BodySelector.classList.add('theme-transition')
        }
    }

    return (
        <>
        <div className='theme_div'>
            <button  onClick={toggleTheme}>
            {themeIcon}
          </button>
          
        </div>
        </>
    )
}; 