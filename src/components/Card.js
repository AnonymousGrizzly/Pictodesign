import Aos from 'aos'
import "aos/dist/aos.css"
import React, {useEffect} from 'react'
import "../design/Card.css"


export default function Card() {
    useEffect(() => { Aos.init({duration:1000});
    }, []);
    return (
        <div className="cards">
            <h1>READ MORE ABOUT US</h1>
            <p> SCROLL </p>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                      <section className="Gorazd-Rogelj" id="Gorazd">
                          <h1>Gorazd Rogelj</h1>
                          <p data-aos="fade-left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Aliquam sem et tortor consequat id porta nibh venenatis.</p>
                       </section>
                       <div className="grey-line">
                            <div className="line"/>
                       </div>
                       <section className="AboutUs" id ="AboutUs">
                           <h1> About Us</h1>
                           <p data-aos="fade-left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Adipiscing at in tellus integer feugiat. Maecenas volutpat blandit aliquam etiam erat. Tellus elementum sagittis vitae et leo duis. Nunc mattis enim ut tellus elementum. Mi quis hendrerit dolor magna eget est. Lectus sit amet est placerat in egestas erat imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Amet dictum sit amet justo donec enim diam vulputate.</p>
                       </section>
                       <div className="white--line">
                            <div className="line"/>
                       </div>
                      <section className="Partners" id="Partners"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
