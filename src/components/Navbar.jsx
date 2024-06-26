import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">

        {/*Navlink react-router-dom*/} 
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">𝒫𝒦𝒫 </p>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to = "/" className={({ isActive }) => isActive ?'text-white' : 'text-black'}>
                About 
            </NavLink>

            <NavLink to = "/project" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>

        </nav>
    </header>
  )
}

export default Navbar
