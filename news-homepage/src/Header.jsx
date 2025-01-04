import logo from './assets/images/logo.svg'
import menu from './assets/images/icon-menu.svg'
import close from './assets/images/icon-menu-close.svg'
const Header = () => {

  const toggleMenu = () => {
    const menu =  document.getElementById('menuContent')
    menu.classList.toggle('menu-close')
    document.body.classList.toggle('overflow-hidden')
  }

  return (
    <nav className='h-auto mt-6 overflow-hidden'>
        <div className='flex justify-between items-center'>
            <img src={logo} alt="logo" />
            <ul className='md:flex gap-10 text-slate-400 font-normal hidden '>
                <li className='hover:text-secondary cursor-pointer'>Home</li>
                <li className='hover:text-secondary cursor-pointer'>New</li>
                <li className='hover:text-secondary cursor-pointer'>Popular</li>
                <li className='hover:text-secondary cursor-pointer'>Trending</li>
                <li className='hover:text-secondary cursor-pointer'>Categories</li>
            </ul>
            <button className='md:hidden' onClick={toggleMenu}>
              <img src={menu} alt="menu" />
            </button>

            <div id='menuContent' className='menu-close transition-all absolute top-0 right-0 h-dvh w-[80%] bg-white md:hidden'>
            <button className='absolute top-8 right-6' onClick={toggleMenu}>
              <img src={close} alt="close" />
            </button>
            <div className='h-full'>
            <ul className='flex flex-col gap-10 text-lg items-center justify-center h-full '>
                <li className='hover:text-secondary cursor-pointer'>Home</li>
                <li className='hover:text-secondary cursor-pointer'>New</li>
                <li className='hover:text-secondary cursor-pointer'>Popular</li>
                <li className='hover:text-secondary cursor-pointer'>Trending</li>
                <li className='hover:text-secondary cursor-pointer'>Categories</li>
            </ul>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Header