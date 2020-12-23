import React from 'react'
// import './Navigation.styles.css'
import './Navigation.styles.min.css'

const Navigation = () => {
  return (
     <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#section-profile" className="navigation__link">🎄<br/>Have fun! <br/>🍷🍷🍷<br/>Don't Drink Too Much!!<br/>🎁</a></li>
                 </ul>
            </nav>
        </div>
  )
}

export default Navigation
