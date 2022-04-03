import React from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiFillDribbbleCircle} from 'react-icons/ai';


const HeaderSocials = () => {
return (
    <div className='header_socials'>
    <a href="http://linkedin.com" target="-blank"><AiOutlineLinkedin/></a>
    <a href="http://github.com" target="-blank"><AiOutlineGithub/></a>
    <a href="http://dribbble.com" target="-blank"><AiFillDribbbleCircle/></a>
    </div>
)
}

export default HeaderSocials