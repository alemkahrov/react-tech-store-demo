import React from 'react'
import styled from "styled-components"
import Title from "../Title"

export default function Contact() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="mx-auto col-12 col-md-6">
            <Title title="contact us" />
            <form action="https://formspree.io/alem.kahrovic84@gmail.com"
              method="POST" className="mt-5">
              <div className="form-group">
                <input type="text" name="first" className="form-control" placeholder="Name" />
              </div>

              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Email" />
              </div>

              <div className="form-group">
                <input type="text" name="subject" className="form-control" placeholder="subject" />
              </div>

              <div className="form-group">
                <textarea name="message" className="form-control" rows="10" placeholder="Message" />
              </div>

              <div className="form-group">
                <button type="submit" value="Send" className="form-control main-link">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
