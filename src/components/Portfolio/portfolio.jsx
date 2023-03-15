import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/drum.gif'
import IMG2 from '../../assets/dices.webp'
import IMG3 from '../../assets/animals.gif'
import IMG4 from '../../assets/pacman.gif'
import IMG5 from '../../assets/puzzle.webp'
import IMG6 from '../../assets/spamm.webp'
import IMG7 from '../../assets/overflow.webp'
import IMG8 from '../../assets/pc.webp'
import IMG9 from '../../assets/hospitall.gif'


function portfolio() {
  return (
    <section id='portfolio'>
      <h5>Things I've developed</h5>
      <h2>Portfolio</h2>

      
      <div className="container portfolio__container">
        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <div className="portfolio__item-cta">
          <h3>A simple DrumKit</h3>
          <a href="https://github.com/hassanjawwad12/DrumRoll" className='btn'>Github</a>
          <a href="https://hassanjawwad12.github.io/DrumRoll/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>

        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <div className="portfolio__item-cta">
          <h3>A Simple Dice Game</h3>
          <a href="https://github.com/hassanjawwad12/DiceGame" className='btn'>Github</a>
          <a href="https://hassanjawwad12.github.io/DiceGame/" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        
        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <div className="portfolio__item-cta">
          <h3>My first website</h3>
          <a href="https://github.com/hassanjawwad12/Animals" className='btn'>Github</a>
          <a href="https://hassanjawwad12.github.io/Animals/" className='btn btn-primary'>Live Demo</a>
           </div>
        </article>
        
        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt=""/>
          </div>
          <div className="portfolio__item-cta">
          <h3>Pac-Man Game (Semester Work)</h3>
          <a href="https://github.com/hassanjawwad12/Pac-Man-" className='btn'>Github</a>
          </div>
        </article>
        
        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>
          </div>
          <div className="portfolio__item-cta">
          <h3>AI assignment (Semester Work)</h3>
          <a href="https://github.com/hassanjawwad12/Artificial-Intelligence-Assignment" className='btn'>Github</a>
          </div>

        </article>
        
        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" className="cust"/>
          </div>
          <div className="portfolio__item-cta">
          <h3>Spam Dectector ML</h3>
          <a href="https://github.com/hassanjawwad12/Spam-Detector-" className='btn'>Github</a>
          </div>

        </article>

        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} className="cust" alt=""/>
          </div>
          <div className="portfolio__item-cta">
          <h3>Overflow management system</h3>
          <a href="https://github.com/hassanjawwad12/OverFlow-Management" className='btn'>Github</a>
          </div>

        </article>
        
        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" className="cust"/ >
          </div>
          <div className="portfolio__item-cta">
          <h3>A Custom Shell</h3>
          <a href="https://github.com/hassanjawwad12/Custom-Shell" className='btn'>Github</a>
          </div>

        </article>
        
        <article classname="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG9} alt="" className="cust"/>
          </div>
          <div className="portfolio__item-cta">
          <h3>A Hospital Management System</h3>
          <a href="https://github.com/hassanjawwad12/Hospital-System-" className='btn'>Github</a>
          </div>

        </article>
        
        


      </div>
    </section>
  )
}

export default portfolio