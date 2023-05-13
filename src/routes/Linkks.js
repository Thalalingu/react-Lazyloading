import React from 'react'
import {Link} from 'react-router-dom'
const Linkks = () =>{
  return(
    <div>
      <p>i m Linkks</p>
      <ul>
        <a href="/post"><li>post</li></a>
        <Link to="/About"><li>about</li></Link>
        <Link to="/Lazycomp"><li>Lazyloading</li></Link>

        </ul>
    </div>
  )
}

export default Linkks