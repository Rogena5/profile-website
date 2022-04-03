import React from 'react';
import CV from '../../assets/Rogena Ramzy.pdf';

export const CTA = () => {
return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download cv</a>
    <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
)
}
export default CTA;