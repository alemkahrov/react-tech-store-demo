import React from 'react'
import styled from "styled-components"
import mainBcg from "../images/mainBcg.jpeg"


export default function Hero({ image, title, max, children }) {
  return (
    <HeroWrapper maxHeight={max} img={image}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
min-height: ${props => (props.maxHeight ? 'calc(100vh - 59px)' : '60vh')};
background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props => props.img}) center/cover no-repeat;
.title {
  color: var(--mainWhite);
  text-transform: uppercase;
  font-size: 3.2rem;
  text-shadow: 4px 4px 0 rgba(0,0,0, 0.3);
  letter-spacing: var(--mainSpacing);
  margin-right: -0.3rem;
}
`

Hero.defaultProps = {
  image: mainBcg
};