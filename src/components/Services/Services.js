import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

export default function Services() {
  return (
    <section id="services">
    <h5>What i offer</h5>
    <h2>Services</h2>

    <div className='container service_container'>
    <article className='services'>
    <div className='service_head'>
      <h3>UI/UX Design</h3>
    </div>

    <ul className='service_list'>
      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>

      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>
      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>
    </ul>
    </article>
      
      <article className='services'>
    <div className='service_head'>
      <h3>WEB DEVELOPMENT</h3>
    </div>

    <ul className='service_list'>

      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>
      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>
      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>
      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>
    </ul>
    </article>

    <article className='services'>
    <div className='service_head'>
      <h3>CONTENT CREATION</h3>
    </div>

    <ul className='service_list'>
      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>

      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>
      <li>
        <BiCheck className='service_list-icon'/>
        <p>lorem ispum sit syt sir etnfd adtfgrhk humpd tyjn opmn</p>
      </li>
    </ul>
    </article>


    </div>
    </section>
  )
}
