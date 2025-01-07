import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
    { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
    { markerOffset: 25, name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
    { markerOffset: 25, name: "Chicago", coordinates: [-87.6298, 41.8781] },
    { markerOffset: -15, name: "Houston", coordinates: [-95.3698, 29.7604] },
    { markerOffset: 25, name: "Phoenix", coordinates: [-112.074, 33.4484] },
    { markerOffset: 25, name: "Philadelphia", coordinates: [-75.1652, 39.9526] },
    { markerOffset: -15, name: "San Antonio", coordinates: [-98.4936, 29.4241] },
    { markerOffset: 25, name: "San Diego", coordinates: [-117.1611, 32.7157] },
    { markerOffset: 25, name: "Dallas", coordinates: [-96.797, 32.7767] },
    { markerOffset: -15, name: "San Jose", coordinates: [-121.8863, 37.3382] },
    { markerOffset: 25, name: "Denver", coordinates: [-104.9903, 39.7392] },
    { markerOffset: 25, name: "Kansas City", coordinates: [-94.5786, 39.0997] },
    { markerOffset: 25, name: "Oklahoma City", coordinates: [-97.5164, 35.4676] },
    { markerOffset: 25, name: "Minneapolis", coordinates: [-93.2650, 44.9778] },
  ];
  
  const secondaryMarkers = [
    { markerOffset: -15, name: "Brooklyn", coordinates: [-73.9442, 40.6782] },
    { markerOffset: 25, name: "Santa Monica", coordinates: [-116.4912, 34.0195] },
    { markerOffset: 25, name: "Evanston", coordinates: [-87.6877, 42.0451] },
    { markerOffset: -15, name: "Pasadena", coordinates: [-119.6445, 34.9478] },
    { markerOffset: 25, name: "Fort Worth", coordinates: [-97.3308, 32.7555] },
    { markerOffset: 25, name: "Oakland", coordinates: [-121.2711, 38.8044] },
    { markerOffset: -15, name: "Miami", coordinates: [-80.1918, 25.7617] },
    { markerOffset: 25, name: "Orlando", coordinates: [-81.3792, 28.5383] },
    { markerOffset: 25, name: "Tampa", coordinates: [-82.4572, 27.9506] },
    { markerOffset: 25, name: "Jersey City", coordinates: [-74.9445, 39.7178] },
    { markerOffset: 25, name: "Buffalo", coordinates: [-78.8784, 42.8864] },
    { markerOffset: 25, name: "Boulder", coordinates: [-107.2705, 40.0150] },
    { markerOffset: 25, name: "Aurora", coordinates: [-103.8319, 38.7294] },
    { markerOffset: 25, name: "Overland Park", coordinates: [-92.6708, 38.9822] },
    { markerOffset: 25, name: "Norman", coordinates: [-99.4395, 35.2226] },
    { markerOffset: 25, name: "St. Paul", coordinates: [-93.0899, 44.9537] },
    { markerOffset: 25, name: "Bloomington", coordinates: [-94.2983, 46.8408] },
    { markerOffset: 25, name: "Wichita", coordinates: [-97.3301, 37.6872] },
    { markerOffset: 25, name: "Tulsa", coordinates: [-95.9928, 36.0539] },
  ];

const MapChart = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleMoveEnd = (position) => {
    setZoomLevel(position.zoom);
  };

  return (
    <ComposableMap className="composable-map" projection="geoAlbersUsa">
      <ZoomableGroup center={[0, 0]} onMoveEnd={handleMoveEnd}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} style={geographyStyle} />
            ))
          }
        </Geographies>
        {zoomLevel <= 2 && markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={7} fill="#E50" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
        {zoomLevel > 2 &&
          secondaryMarkers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={5} fill="#04D" stroke="#fff" strokeWidth={1} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                {name}
              </text>
            </Marker>
          ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;



const geographyStyle = {
    default: {
      fill: "#ADF",
      outline: "none",
      stroke: "#FFFFFF",
      strokeWidth: 2.5,
    },
    hover: {
      fill: "#7CF",
      outline: "none",
      stroke: "#FFFFFF",
      strokeWidth: 0.5,
    }
  }