import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery} = useAppContext()
    
    const logout = async ()=>{
        setUser(null);
        navigate('/')
    }

    useEffect(()=>{
        if(searchQuery.length > 0){
            navigate("/products")
        }
    },[searchQuery])
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to='/' onClick={()=> setOpen(false)}>
                <img className="h-9" src={assets.logo} alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/products'}>All Products</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e)=> setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon } alt='searchIcon' className='w-4 h-4'/>
                </div>

                <div onClick={()=> navigate("/cart")} className="relative cursor-pointer">
                    {/* <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> */}
                    <img src={assets.nav_cart_icon} alt='navCartIcon' className='w-6 opacity-80'/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

               {!user ? (<button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button>)
                :
                (
                    <div className='relative group'>
                        <img src={assets.profile_icon} className='w-10' alt="profileIcon" />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                            <li className='p-1.5 pl=3 hover:bg-primary/10 cursor-pointer' onClick={()=> navigate("my-orders")}>My Orders</li>
                            <li className='p-1.5 pl=3 hover:bg-primary/10 cursor-pointer' onClick={logout} >Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                {/* <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg> */}
                <img src={assets.menu_icon} alt='menu'/>
            </button>

            {/* Mobile Menu */}
            { open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-1`}>
                <NavLink to="/" onClick={()=> setOpen(false)}>Home</NavLink>
                <NavLink to="/products" onClick={()=> setOpen(false)}>All Product</NavLink>
                {user &&
                <NavLink to="/products" onClick={()=> setOpen(false)}>My Orders</NavLink>
                }
                <NavLink to="/" onClick={()=> setOpen(false)}>Contact</NavLink>

                {!user ? (
                    <button onClick={()=>{
                        setOpen(false);
                        setShowUserLogin(true);
                    }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Login
                </button>
                ) : (
                    <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Logout
                </button>
                )} 
                
            </div>)}

        </nav>
  )
}

export default Navbar