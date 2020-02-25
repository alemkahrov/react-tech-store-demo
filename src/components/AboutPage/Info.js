import React from 'react'
import Title from "../AboutPage/Title"
import image from "../../images/aboutBcg.jpeg"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 my-3">
            <img src={image} alt="about company" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              I'm baby commodo lyft sint consequat sunt taiyaki. Ethical consequat pariatur locavore magna. Coloring book adipisicing cardigan, heirloom cupidatat scenester bushwick kitsch palo santo banjo veniam sustainable gastropub cornhole.
            </p>
            <p className="text-lead text-muted">
              Skateboard wayfarers pickled dolore master cleanse street art tbh. Ramps kickstarter disrupt ea intelligentsia narwhal dolore cronut. Bushwick trust fund butcher, pour-over raw denim knausgaard hashtag YOLO aesthetic single-origin coffee disrupt ullamco poke nisi semiotics.
            </p>
            <button className="main-link" type="button" style={{ marginTop: '2rem' }}>more info</button>
          </div>
        </div>
      </div>
    </section>
  )
}
