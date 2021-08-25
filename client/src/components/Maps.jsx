import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    let mounted = true;
    var options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://valorant-api.com/v1/maps',
    };
    axios.request(options)
      .then(function (response) {
        // console.log(response);
        if (mounted) {
          setMaps(response.data.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    return () => mounted = false;
  }, []);

  return (
    <div className="maps-container">
      <h2 className="maps-title">Maps:</h2>
      {maps ?
        <Carousel>
          {
            maps.map((map) =>
              <Carousel.Item key={map.uuid}>
                <img
                  className="d-block w-100"
                  src={map.splash}
                  alt={map.displayName}
                  onClick={() => { imageModalPop(map.displayIcon) }}
                />
                <Carousel.Caption>
                  <h3>{map.displayName}</h3>
                  <p>{map.coordinates}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          }
          <MapModal show={openModal} handleClose={hideModal} img={modalImg} />
        </Carousel>
        : 'Loading..'}
    </div>
  )
}

export default Maps;

