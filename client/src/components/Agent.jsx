import React, { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import AgentInfo from './AgentInfo.jsx';
import './style/Agents.css';

const Agent = ({ agent }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="agent-prof" key={agent.uuid}>
      <img className="agent-icon" src={agent.displayIcon} />
      <button className="agentName" onClick={() => setShowDescription(!showDescription)}>{agent.displayName}</button>
      {showDescription ?
        <AgentInfo
          agent={agent}
        />
        : null}
    </div>
  )
    // <Carousel>
    //   {
    //     agents.map((agent) =>
    //       <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=First slide&bg=373940"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //     )
    //   }
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=First slide&bg=373940"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=Second slide&bg=282c34"
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=Third slide&bg=20232a"
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
}

export default Agent;

