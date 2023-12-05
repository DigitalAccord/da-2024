import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './contact.scss';
import rr from '../../assets/contact/market.png';

const Contact = () => {
  useEffect(() => {
    let map;

    const initializeMap = () => {
      const googleMapsLink = 'https://www.google.com/maps/@30.6982867,76.6971184,14z?entry=ttu';
      const coordinatesMatch = /@(-?\d+\.\d+),(-?\d+\.\d+),/.exec(googleMapsLink);
      const locationNameMatch = /\/([^\/?]+)(?:\?|$)/.exec(googleMapsLink);

      if (coordinatesMatch && locationNameMatch) {
        const [_, lat, lng] = coordinatesMatch;
        const [__, locationName] = locationNameMatch;
        const coordinates = [parseFloat(lat), parseFloat(lng)];

        map = L.map('mapContainer').setView(coordinates, 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        // Customizing the marker icon
        const customIcon = L.icon({
          iconUrl: rr,
          iconSize: [32, 32], // Adjust the size of the icon
          iconAnchor: [16, 32], // Adjust the anchor point of the icon
          popupAnchor: [0, -70], // Adjust the anchor point of the popup
        });

        L.marker(coordinates, { icon: customIcon })
          .addTo(map)
          .bindPopup(`<strong>${locationName}</strong><br>Coordinates: ${coordinates.join(', ')}`)
          .openPopup();
      } else {
        console.error('Unable to extract coordinates and location name from the Google Maps link.');
      }
    };

    initializeMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <>
      <div id="mapContainer" style={{ height: '100vh', width: '100%', position: 'relative' }}></div>
    </>
  );
};

export default Contact;
    