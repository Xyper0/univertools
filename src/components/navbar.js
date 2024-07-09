import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import {Link , NavLink } from 'react-router-dom';
import Theme from './theme';
import '../stylesheet/compsStyle/navbar.css';
export default function Navbar () {

    const [isOpen, setOpen] = useState(false);

    function HamburgerToggle () {
        document.querySelector('.navbar_li').classList.toggle("responsive-active") ;
        setOpen(!isOpen);
    }

    useEffect(() => {

        const handlescroll = () => {
            setOpen(false); 
            document.querySelector('.navbar_li').classList.remove('responsive-active'); 
        }

        window.addEventListener('scroll' , handlescroll); 
        return ()=> {
            window.removeEventListener('scroll' , handlescroll)
        }

    },[])
    
    return (
        <>
        <header className='navbar'>
            <div className='navbar_logo'>UniverTools</div>
            <Hamburger onToggle={HamburgerToggle} toggled={isOpen} toggle={setOpen} />
            <nav className='navbar_li'>
                <ul>
                    <li>
                       <NavLink exact to="/" className={({isActive}) => isActive ? "active-navbar": "" }>جميع الخدمات</NavLink>
                    </li>
                    <li>
                       <NavLink exact to="/balanced" className={({isActive}) => isActive ? "active-navbar": "" }>حساب الموزونة</NavLink>
                    </li>
                    <li>
                       <NavLink exact  to="/age" className={({isActive}) => isActive ? "active-navbar": "" }>حساب العمر</NavLink>
                    </li>
                    <li>
                  <a>
                  <Theme/>
                  </a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}; 