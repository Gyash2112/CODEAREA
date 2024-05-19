
import { useState } from 'react'
import logo from '../assets/nav-logo.png'
import {FaXmark, FaBars} from 'react-icons/fa6';
import {Link} from 'react-scroll';
import {Link as Link1} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems=[
        {link: "Overview" , path:"home"},
        {link:"Feature", path:"feature"},
        {link:"About", path:"about"},
    ]


  return (
    <>
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                        <img src={logo} className='w-10 inline-block items-center' />
                        <span> CODEAREA</span>
                    </a>


                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path})=> <Link1 activeClass='active' spy={true} smooth={true} offset={-90} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link1>)
                        }
                        <Link1 to="/onlineIde">IDE</Link1>
                    </ul>
                </div>

                <div className='space-x-12 hidden md:flex items-center'>
                    <a href='/' className='bg-secondary py-2 px-4 transition:all duration-300 rounded hover:text-white hover:bg-indigo-600'>
                    Sign IN
                    </a>
                    <a href='/' className='bg-secondary py-2 px-4 transition:all duration-300 rounded hover:text-white hover:bg-indigo-600'>
                    Sign UP
                    </a>
                </div>

                <div className='md:hidden'>
                    
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen?(<FaXmark className='w-6 h-6 text-primary'/>):(<FaBars className='w-6 h-6 text-primary'/>)
                        }
                    </button>
                </div>
            </div>
    </nav>
    {/*menu for mobile device*/}
    <div className={`space-y-4 px-4 pt-24  pb-5 bg-secondary ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
    {
        
            navItems.map(({link,path})=> <Link key={link} activeClass='active' spy={true} smooth={true} offset={-90} to={path} className='block hover:text-gray-300 text-white' onClick={toggleMenu}>{link}</Link>)
        
    }
        
    </div>

    <Outlet/>

    </>
    

  )
}

export default Navbar
