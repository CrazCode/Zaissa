import './header.css'
import { Link, Outlet } from 'react-router-dom'


function Header() {
  return (
    
    <div className='header'>
      <div className='left'>
        <img src="./src/assets/svgs/zaissa-word-decor.svg" alt="Zaissa Word" className='crs'/>
        <div className="searchBar crs">
          <input type="search" placeholder="Search for products, brands and more . . ."/>
          <img src='./src/assets/svgs/search-diamond-3.svg' className='crs'/>
        </div>
      </div>
      <div className='right'>
        <img src="./src/assets/svgs/user.svg" className='crs'/>
        <img src="./src/assets/svgs/wishlist-diamond.svg" className='crs'/>
        <img src="./src/assets/svgs/cart-diamond.svg" className='crs'/>
        <img src="./src/assets/svgs/nightMode-moon-circle.svg" className='crs'/>
        <img src="./src/assets/svgs/menu1-circle.svg" className='crs'/>
      </div>
    </div>
  )
}

export default Header