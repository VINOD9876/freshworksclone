import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bootstrap.css'


export default function Belowhome(){
    return(
         <section className=" pt-xl pb-lg two-column-section-home l-section-home" id ="">
            <div className="l-page container" data-scroll-target="">
              <h2 className="align-center">An experience they’ll love</h2>
              <p className="align-center para-24">Our fresh approach to business software has enabled over 50,000 companies big and small across the globe to exceed customer and employee expectations. We deliver on the unfulfilled promise of easy-to-use SaaS software, and help our customers drive clear business results.</p>
             <div className="row">
                <div className="col-md-6 divider-right mb-md">
                  <div className="migrate-wrapper align-center migrate-wrapper-no-hover two-column-home">
                    <div  >
                      <img alt="vinod"className="lazy-image w-px-200" src="https://website-assets-fw.freshworks.com/attachments/ckseg6ken0ugrpkg0ba4l86we-ill-delight-customers.one-half.jpg"/>
                    </div>
                    <h2 className="h2-48">Delight your customers</h2>
                    <p>Exceed the evolving expectations your customers have, with contextual and relevant conversations powered by a 360-degree customer view.</p>
                    <a className="button button--ghost "  href="/"> Solutions for customer support</a>
                    <a className="button button--ghost "  href="/"> Solutions for sales and marketing</a>
                  </div>
                </div>
                <div className="col-md-6 mb-md">
                  <div className="migrate-wrapper align-center migrate-wrapper-no-hover two-column-home">
                      <div   >
                          <img alt="vinod" className="lazy-image w-px-200" src="https://website-assets-fw.freshworks.com/attachments/cksegclxu23k2klfze5r4817y-ill-delight-employees.one-half.jpg"/>   
                      </div>
                      <h2 className="h2-48">Delight your employees</h2>
                      <p>Help your employees crush internal NPS ratings with our intuitive, easy-to-use products, so they can spend less time navigating bloated, difficult-to-use legacy software.</p>
                      <a  className="button button--ghost " href="/"> Solutions for IT service management</a>
                      <a  className="button button--ghost " href="/"> Solutions for HR management</a>
                    </div>
                  </div>
                </div>
              </div>
        </section>
    )
}