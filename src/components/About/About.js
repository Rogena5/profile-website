import React from 'react';
import './about.css';
import ME from '../../assets/me111.jpg';
import {BsFillAwardFill} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolderAdd} from 'react-icons/ai';

export default function About() {
  return (
    <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className='about_me'>
      <div className='about_me-image'>
        <img src={ME} alt="About"/>
      </div>
      </div>

    <div className='about_content'>

    <div className='about_cards'>

<article className='about_card'>
<BsFillAwardFill className='about_icon'/>
  <h5>Experience</h5>
  <small>1+ years working</small>
</article>

<article className='about_card'>
<FiUsers className='about_icon'/>
  <h5>clients</h5>
  <small>200+ worldwide</small>
</article>

<article className='about_card'>
<AiFillFolderAdd className='about_icon'/>
  <h5>projects</h5>
  <small>4+ completed</small>
</article>

    </div>
    <p>There is no replacement of hard work for prosperity. No matter how talented you are, you’ve to work hard to excel in life. It’s not about competition only, it’s also about determination and consistency. We need to work hard for prosperity because success demands dedication. No matter which profession you choose which career you aim at,
    you’ve to work hard to perform the best and make it to the top. </p>
    <a href="#contact" className='btn btn-primary'>lets talk</a>

    </div>

    </div>
    </section>
  )
}
