import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Totalcss.css'

export default function Homepage(){

    return(
        <div>
            <section className="first-fold l-section-home image-wrap banner-right-image-home image-wrap-no-padding" data-scroll-target="" id ="">
                <div className="banner-cover" style={{backgroundImage: 'url("https://website-assets-fw.freshworks.com/attachments/cks7v2jv501lmrffzrb67m1ua-gradient.one-half.png")'}}></div>
                    <div className="l-page container  l-home ">
                      <div className="row grid-align-bottom">
                        <div className="col-md-6  mobile-center-desktop-left-align pb-lg banner-text-content small-banner">
                            <h1 className="h0-96">Delight made easy</h1>
                            <p className="sub-text">We make it fast and easy for businesses to delight their customers and employees.</p>
                        <div className="mt-md">
                        <a className="button button--solid " href="/"> Get started</a>
                        <a  className="button button--ghost " href="/"> Contact sales</a>
                      </div>
                    </div>
                    <div className="col-md-6 image-align-bottom">
                      <div >
                        <img className="lazy-image" src="https://website-assets-fw.freshworks.com/attachments/cksefyet42l0ljqfzfmbgk84b-hero-image-0811-front.one-half.png" alt='vinod'/>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
      </div>
       
    )
}