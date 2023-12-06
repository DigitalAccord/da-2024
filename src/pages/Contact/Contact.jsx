import React, { useEffect,useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './contact.scss';
import rr from '../../assets/contact/market.png';
import arrow from '../../assets/Arrow 4.png';

const Contact = () => {
  const defaultPosition = [30.6982867, 76.6971184];
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    const googleMapsLink = 'https://www.google.com/maps/@30.6982867,76.6971184,14z?entry=ttu';
    const coordinatesMatch = /@(-?\d+\.\d+),(-?\d+\.\d+),/.exec(googleMapsLink);

    if (coordinatesMatch) {
      const [_, lat, lng] = coordinatesMatch;
      setPosition([parseFloat(lat), parseFloat(lng)]);
    } else {
      console.error('Unable to extract coordinates from the Google Maps link.');
    }
  }, []);

  


  return (
    <>
    

    <div className='map-section'>
        <MapContainer
          center={position}
          zoom={14}
          style={{
            height: '100vh',
            width: '70%',
            position: 'relative',
            marginBottom: '40px',
            overflow: 'hidden',
            backgroundColor: '#27303F', // Set background color
          }}
          dragging={true}
          touchZoom={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          boxZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://maps.geoapify.com/v1/tile/dark-matter-brown/{z}/{x}/{y}.png?apiKey=e24b101acbd2442093544af11f463dc3"
           
            
          />
          <Marker position={position} icon={L.icon({ iconUrl: rr, iconSize: [68, 70], iconAnchor: [16, 32], popupAnchor: [0, -70] })}>
            <Popup>
              <strong>{position}</strong>
              <br />
              Coordinates: {position.join(', ')}
            </Popup>
          </Marker>
        </MapContainer>
        <div className='contact-form' style={{paddingTop:"120px"}}>
          <div className='form-text'>
            <h1>Let’s<br></br> Talk.</h1>
          </div>
          <div className='form-wrapper '>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label mb-0">Name</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Contact Number</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Email</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-5">
                      <label for="exampleInputPassword1" class="form-label" style={{ marginBottom: "100px" }}>Message</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn submit-btn d-flex justify-content-between"><p style={{ margin: 0 }}>Submit Message</p><img src={arrow} className='form-btn-arrow' style={{ maxWidth: "68px" }} /></button>
                  </form>
                </div>
        </div>
    </div>
    </>
  );
};

export default Contact;
