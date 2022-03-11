import React from 'react';
import styles from './styles.css';
import orlando from './assets/img/orlando.png';
import raspberry from './assets/img/raspberry-pi.png';
import pageSpeed from './assets/img/page-speed.png';
import selenium from './assets/img/selenium.png';


function App() {
  return (
    <div className="container">
      <header className="row">
        <nav className="navbar navbar-expand-lg navbar-dark bg-color">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">UPAJE Aplicaciones WEB</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle nav-link__custom" href="#" id="navbarDropdown"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PORTAFOLIO
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">RASPBERRY</a></li>
                    <li><a className="dropdown-item" href="#">PAGESPEED</a></li>
                    <li><a className="dropdown-item" href="#">SELENIUM</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link__custom" href="#about">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link__custom" href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="row section-main justify-content-center">
        <div className="centrador columna col-4">
          <img className="imagen" id="imagen-orlando" src={orlando} alt="Orlando" />
        </div>
        <p className="text-big">START BOOTSTRAP</p>
        <p className="css-white">Web Developer - Graphic Artist - User Experience Designer</p>
      </section>
      <section className="row section-portafolio justify-content-evenly" id="portafolio">
        <p className="section-portafolio__text text-big">PORTAFOLIO</p>
        <div className="centrador columna col-12 col-sm-3">
          <img className="imagen" src={raspberry} alt="Raspberry Pi" />
          <p className="section-portafolio__text ">Raspberry Pi</p>
        </div>
        <div className="centrador columna col-12 col-sm-3">
          <img className="imagen" src={pageSpeed} alt="PageSpeed" />
          <p className="section-portafolio__text">PageSpeed</p>
        </div>
        <div className="centrador columna col-12 col-sm-3">
          <img className="imagen" src={selenium} alt="Selenium" />
          <p className="section-portafolio__text">Selenium</p>
        </div>
      </section>
      <section className="row section-about justify-content-center" id="about">
        <div className="columna col-12 ">
          <p className="text-big">ABOUT</p>
          <hr />
          <p className="text-justify">Freelancer is a free bootstrap theme created by Start Bootstrap. The dowloan
            includes the complete source
            files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy
            customization.

            Whether you're a studen looking to showcase your work, a professional looking to attract clients, or
            a
            graphic artist looking to share your projects, this template is the perfect starting point!
          </p>
        </div>
      </section>
      <section className="row section-contact" id="contact">
        <p className="text-big">CONTACT</p>
        <form className="form-contact">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="mailHelpe" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </section>
      <footer className="row justify-content-evenly">
        <div className="columna col-12 col-sm-3">
          <h3 className="css-p-footer">LOCATION</h3>
          <p className="css-p-footer-2">3841 Melrose Place</p>
        </div>
        <div className="columna col-12 col-sm-3">
          <h3 className="css-p-footer">AROUND THE WEB</h3>
          <p className="css-p-footer-2">footer 2</p>
        </div>
        <div className="columna col-12 col-sm-3">
          <h3 className="css-p-footer">ABOUT FREELANCER</h3>
          <p className="css-p-footer-2">Freenlace is a free to use, open source Bootstrap theme created by Start
            Bootstrap.</p>
        </div>
      </footer>

    </div>


  );
}

export default App;
