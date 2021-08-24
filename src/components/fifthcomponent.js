import React from 'react'
import './Bootstrap.css'
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
export default function Slider() {
  
            // State for Active index
            const [activeIndex, setActiveIndex] = React.useState(0);
          
            // State for Animation
            const [animating, setAnimating] = React.useState(false);
          
            // Sample items for Carousel
            const items = [
                {src:'https://website-assets-fw.freshworks.com/attachments/cksep6tim00um4cg0hz2sy8fv-waterstons.one-half.png',
                 content:'“The Freshworks team was a great asset during implementation and continue to be a key partner for Waterstons as we look to further mature and improve our services to customers, tailored to their specific needs.”',
                 author:'Alex Bookless, Head of Managed Services, Waterstons'
                },
                {src:'https://website-assets-fw.freshworks.com/attachments/cksep7mph00ne2dfzr3115iaq-phone-pe-1.one-half.png',
                content:'“For PhonePe, Freddy fetches context from the transactions made and offers contextual assistance for a personalized self-service experience from right within the app. We have been using it for a year and can confidently say that we have accomplished most of what we had in mind.”',
                author:'Vishal Gupta, Head of Product, PhonePe'
                },
                {
                    src:'https://website-assets-fw.freshworks.com/attachments/cksep8eis00ne4tg0nvamx4pf-payvision-1.one-half.png',
                    content:'“The Freshworks team was a great asset during implementation and continue to be a key partner for Waterstons as we look to further mature and improve our services to customers, tailored to their specific needs.”',
                    author:'Alex Bookless, Head of Managed Services, Waterstons'
                }
            ];
          
            const itemLength = items.length - 1;
          
            // Previous button for Carousel
            const previousButton = () => {
                if (animating) return;
                const nextIndex = activeIndex === 0 ?
                    itemLength : activeIndex - 1;
                setActiveIndex(nextIndex);
            }
          
            // Next button for Carousel
            const nextButton = () => {
                if (animating) return;
                const nextIndex = activeIndex === itemLength ?
                    0 : activeIndex + 1;
                setActiveIndex(nextIndex);
            }
          
            // Carousel Item Data
            const carouselItemData = items.map((item) => {
                return (
                    <CarouselItem
                        key={item.src}
                        onExited={() => setAnimating(false)}
                        onExiting={() => setAnimating(true)}
                    >
                        <div className="row testimonial-card all-center">
                          <div className="col-md-12 testimonial-content">
                            <div className="testimonial-logo align-center">
                               <div>
                                 <img alt="vinod" className="lazy-image"src={item.src}/> 
                               </div>
                            </div>
                            <p className="testimonial-quote">{item.content}</p>
                            <div className="col-md-10 col-md-offset-1 author-bio">
                                <h6 className="author-name">{item.author}</h6>
                           </div>
                         </div>
                       </div>
                    </CarouselItem>
                );
            });
          
            return (
                <div style={{
                    display: 'block', padding: 30
                }}>
                    <Carousel previous={previousButton} next={nextButton} 
                        activeIndex={activeIndex} >
                        
                        {carouselItemData}
                        <CarouselIndicators items={items} 
                            activeIndex={activeIndex} 
                            onClickHandler={(newIndex) => {
                                if (animating) return;
                                setActiveIndex(newIndex);
                            }} />
                    </Carousel>
                </div >
            );
        }
          
 