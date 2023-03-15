import React from 'react'
import './about.css'
import ME from '../../assets/about.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
      <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__me-image">
             <img src={ME} alt="about" />
           </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
             <article className="about__card">
               <FaAward className='about__icon'/>
               <h5>Experience</h5>
               <small>DevSinc and Grandeur Technologies Bootcamp</small>
             </article>
             <article className="about__card">
               <VscFolderLibrary className='about__icon'/>
               <h5><a href="https://github.com/hassanjawwad12?tab=repositories">Projects</a></h5>
             </article>
             </div>

             <p>
               I am a student of computer science and currently studying in FAST NUCES Lahore.I like to code sometimes that's why I am here.


             </p>
             <a href="#contact" className='btn btn-primary'>Let's have a chit chat</a>
        </div>
      </div>
      </section>
  )
}

export default about