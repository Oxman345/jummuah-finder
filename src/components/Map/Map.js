import React, { Component } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "./Map.css";
mapboxgl.accessToken = "pk.eyJ1IjoiYW1pcm05OSIsImEiOiJja2ZmcHh3cHgwZTl5MnpvYmQyc2dhZzBjIn0.xaycFjvEQXatX6mJ3Z0qXA";

class Map extends Component {
  state = {
    lng: -93.27,
    lat: 44.9778,
    zoom: 11,
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on('move', () => {
        this.setState({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });

      console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}
ReactDOM.render(<Map />, document.getElementById('root'));

export default Map;
