import React from 'react'
import logo from '../Logo/te758.jpg'
import style from '../Style/nav.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        
          <img src={logo} alt="" style={{ width: '100px', height: '60px' }} />
      </div>
      <div className={style.menu}>
            <li><Link to='/'>Home</Link></li>
            <li>Category</li>
            <li>aabbbab</li>
            <li>About</li>
            <li><Link to='/signin'><i class="fa-solid fa-user"></i></Link></li>
      </div>

    </div>
  )
}

export default Nav
