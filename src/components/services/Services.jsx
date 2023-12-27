import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Competitor analysis</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customer analysis and users research</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product structure and strategy</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User guides and storylines</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customer analysis</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Branding and graphic development</p> 
            </li>
          </ul>
        </article>
{/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create and maintain software documentation</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing user interfaces and navigation menus</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing web applications</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Troubleshooting problems with performance or user experience</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaborating with designers, developers, and stakeholders</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrating multimedia content onto a site</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing and reviewing code for sites, typically HTML, XML, or JavaScript</p> 
            </li>
          </ul>
        </article>
{/* END WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Designer</h3>
          </div>

          <ul className="service__list3">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adobe Illustrator</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Adobe InDesign</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Adobe Premiere Pro</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adobe Photoshop</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adobe Audition</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>canva</p> 
            </li>
          </ul>
        </article>
{/* END OF DESIGNER */}
      </div>
    </section>
  )
}

export default Services