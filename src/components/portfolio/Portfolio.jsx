import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/original.png'
import IMG2 from '../../assets/ReactJS-cope.png'
import IMG3 from '../../assets/laravel-cope.png'
import IMG4 from '../../assets/portfolio-project.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Blog with Laravel',
    github: 'https://github.com/AHMEDAGNAOU/blog_laravel',
    demo: '#demo'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Ip address tracker using React.js',
    github: 'https://github.com/Wiran-Larbi/ip-trackit',
    demo: '#demo'
  },
  {
    id: 3,
    image: IMG3,
    title: 'My first project using Laravel',
    github: 'https://github.com/AHMEDAGNAOU/First_Project',
    demo: '#demo'
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is my portfolio project',
    github: 'https://github.com/AHMEDAGNAOU/Portfolio',
    demo: '#demo'
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: '#github',
    demo: '#demo'
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    github: '#github',
    demo: '#demo'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>  
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio