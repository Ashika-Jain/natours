import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// Import Mapbox CSS
import 'mapbox-gl/dist/mapbox-gl.css';

const Globe = () => {
  // Set up Mapbox access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2hyZXlhZ3VwdGE3NyIsImEiOiJjbHVxem50NWcwMjB0MmxvNXRldXJ0dXJ2In0.49rBEJPDz6Ww0DiaRnLmFw';

  useEffect(() => {
    // Initialize map when component mounts
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
      zoom: 1,
      center: [30, 15]
    });

    // Add navigation control
    map.addControl(new mapboxgl.NavigationControl());
    // Disable scroll zoom
    map.scrollZoom.disable();

    // Set default atmosphere style
    map.on('style.load', () => {
      map.setFog({});
    });

    // Values to control rotation speed
    const secondsPerRevolution = 240;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;

    let userInteracting = false;
    const spinEnabled = true;

    function spinGlobe() {
      const zoom = map.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    // Pause spinning on interaction
    map.on('mousedown', () => {
      userInteracting = true;
    });
    map.on('dragstart', () => {
      userInteracting = true;
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.on('moveend', () => {
      spinGlobe();
    });

    // Start spinning the globe
    spinGlobe();

    // Clean up map instance on unmount
    return () => map.remove();
  }, []);

  return (
    <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}></div>
  );
};

export default Globe;
