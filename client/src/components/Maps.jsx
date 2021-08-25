import React, { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

import MapModal from './MapModal.jsx';
import './style/Maps.css';

const Maps = () => {
  const [openModal, setOpenModal] = useState(false);
  const [maps, setMaps] = useState([]);
  const [modalImg, setmodalImg] = useState(null);

  const imageModalPop = (param) => {
    setOpenModal(true);
    setmodalImg(param);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  var options = {
    method: 'GET',
    url: 'https://valorant-api.com/v1/maps',
  };

  axios.request(options)
    .then(function (response) {
      setMaps(response.data.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="maps-container">
      <h2 className="maps-title">Maps:</h2>
      <Carousel>
        {
          maps.map((map) =>
            <Carousel.Item key={map.uuid}>
              <img
                className="d-block w-100"
                src={map.splash}
                alt={map.displayName}
                onClick={() => {imageModalPop(map.displayIcon)}}
              />
              <Carousel.Caption>
                <h3>{map.displayName}</h3>
                <p>{map.coordinates}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        }
        <MapModal show={openModal} handleClose={hideModal} img={modalImg} />
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"
            alt="Ascent"
            onClick={() => setOpenModal(true)}
          />
          <Carousel.Caption>
            <h3>Ascent</h3>
            <p>45°26'BF'N,12°20'Q'E</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png"
            alt="Split"
            onClick={() => setOpenModal(true)}
          />

          <Carousel.Caption>
            <h3>Split</h3>
            <p>35°41'CD'N,139°41'WX'E</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png"
            alt="Bind"
            onClick={() => setOpenModal(true)}
          />

          <Carousel.Caption>
            <h3>Bind</h3>
            <p>34°2'A'N,6°51'Z'W</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png"
            alt="Breeze"
            onClick={() => setOpenModal(true)}
          />

          <Carousel.Caption>
            <h3>Breeze</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png"
            alt="Icebox"
            onClick={() => setOpenModal(true)}
          />

          <Carousel.Caption>
            <h3>Icebox</h3>
            <p>76°44' A\"N 149°30' Z\"E</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png"
            alt="Haven"
            onClick={() => setOpenModal(true)}
          />

          <Carousel.Caption>
            <h3>Haven</h3>
            <p>27°28'A'N,89°38'WZ'E</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  )
}

export default Maps;

