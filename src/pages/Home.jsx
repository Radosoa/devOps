import React from 'react';
import Img from '../images/home.png'


const Home = () =>{

     return (
        // <a href="#" class="scrolltop" id="scroll-top">
        //     <i class='bx bx-chevron-up scrolltop__icon'></i>
        // </a>
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
              <div className="home__data">
                  <h1 className="home__title">Tasty food</h1>
                  <h2 className="home__subtitle">Try the best food of  the week.</h2>
                  <a href="#" className="button">View Menu</a>
              </div>
              <img src={ Img } alt="" srcset="" className="home__img" />
          </div>
      </section>
     )
}

export default Home;