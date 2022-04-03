import React from 'react'
import './experience.css';
import{AiOutlineCheckCircle} from 'react-icons/ai';

export default function Experience() {
  return (
    <section id="experience">
    <h5>What skills i have</h5>
    <h2>My Experience</h2>

    <div className='container experience_container'>
      <div className='experience_frontend'>
        <h3>Front end development</h3>
        <div className='experience_content'>

          <article className='experience_details'>
          <AiOutlineCheckCircle className='exicon'/>
          <h4>HTML</h4>
          <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
          <AiOutlineCheckCircle className='exicon'/>
          <h4>CSS</h4>
          <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
          <AiOutlineCheckCircle className='exicon'/>
          <h4>JAVA SCRIPT</h4>
          <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
          <AiOutlineCheckCircle className='exicon'/>
          <h4>BOOTSTRAP</h4>
          <small className='text-light'>experienced</small>
          </article>

          <article className='experience_details'>
          <AiOutlineCheckCircle className='exicon'/>
          <h4>REACT.JS</h4>
          <small className='text-light'>experienced</small> 
          </article>

        </div>
      </div>
    </div>
    </section>
  )
}
