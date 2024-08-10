import React from 'react'
import App1 from '../images/app1.png'
import App2 from '../images/app2.png'
import Movil from '../images/movil-app.png'

function Appli() {
  return (
     <section className="app section bd-container">
          <div className="app__container bd-grid">
               <div className="app__data">
                    <span className="section-subtitle app__initial">App</span>
                    <h2 className="section-title app__initial">App is aviable</h2>
                    <p className="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                    <div className="app__stores">
                         <a href="#"><img src={ App1 } alt="" className="app__store" /></a>
                         <a href="#"><img src={ App2 } alt="" className="app__store" /></a>
                    </div>
               </div>
               <img src={ Movil } alt="" class="app__img" />
          </div>
     </section>
  )
}

export default Appli