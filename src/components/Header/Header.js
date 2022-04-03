import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
  return (
<header>
<div className='container header_container'>
<h5>Hello iam</h5>
<h1>Rogena Ramzy</h1>
<h5 className='text-light'>Front end Developer</h5>
<CTA/>
<HeaderSocials/>
<div className='me'>
<img src={ME} alt="me"/>
</div>

<a href="#contact" className='scroll_down'>scroll down</a>

</div>
</header>
  )
}
