import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  GeolocateControl,
  NavigationControl,
  Popup,
} from "react-map-gl";
import "./MapData.css";
import { locationData } from "./locationData";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianVkaXRocmlja2V0dHMiLCJhIjoiY2w1djA4Y2FuMDR6OTNibnAzbm1oeWN4dCJ9.bwVGnCWwW0QgGJp1KAoN2Q";

export const MapData = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const data = locationData;

  return (
    <main className="main__body-mapData">
      <header className="main__mapData-header">
        <h2>Greater Brighton</h2>
      </header>
      <p className="find__your-location">find your location ➤</p>

      <Map
        initialViewState={{
          longitude: -0.16038,
          latitude: 50.898625,
          zoom: 8.5,
          pitch: 45,
          bearing: -10, // bearing in degrees
        }}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      >
        {showPopup && (
          <Popup
            latitude={showPopup.latitude}
            longitude={showPopup.longitude}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
          >
            {/* {showPopup.id} */}
            {"ID:" + showPopup.id}
            {<br />}
            {"Owner: " + showPopup.FirstName_LastName_UK}
          </Popup>
        )}
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />

        {data.map((pin) => {
          return (
            <Marker
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setShowPopup(pin);
              }}
              key={pin.id}
              latitude={pin.latitude}
              longitude={pin.longitude}
              anchor="bottom"
            />
          );
        })}
        <NavigationControl />
      </Map>
    </main>
  );
};
