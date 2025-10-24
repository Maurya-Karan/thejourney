import { Link } from 'react-router-dom'


import { logo } from '../../assets'
import { TbLayoutSidebar } from "react-icons/tb";

const BlogNav = ({setSide}) => {

    return (
        <nav className={` z-20 mb-5`} >

            {/* Logo   */}
            <Link to="/" className='flex flex-row items-center justify-evenly'  >
               
                <img src={logo} alt="logo" className=" h-8 w-8 object-contain"></img>
                <p className='text-white text-[24px] font-bold cursor-pointer flex'>Karan &nbsp;</p>
            </Link>

        </nav>
    )
}

export default BlogNav