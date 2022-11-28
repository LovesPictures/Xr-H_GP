import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup } from "react-map-gl";
import { NavigationControl } from "react-map-gl";

import { MapContactCard } from "../MapContactCard/MapContactCard";
import markerOrange from "../img/markerOrange.png";

import "./MapContact.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianVkaXRocmlja2V0dHMiLCJhIjoiY2w1djA4Y2FuMDR6OTNibnAzbm1oeWN4dCJ9.bwVGnCWwW0QgGJp1KAoN2Q";

export const MapContact = () => {
  // popup
  const [showPopup, setShowPopup] = React.useState(true);

  return (
    <div className="Grid__container-b">
      <div className="Card__text-container-c">
        <div className="cardQ">
          <Map
            initialViewState={{
              longitude: -0.16038,
              latitude: 50.898625,
              zoom: 10,
              pitch: 45,
              bearing: -10, // bearing in degrees
            }}
            mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/navigation-night-v1"
          >
            {/* popup https://stackoverflow.com/questions/68783312/show-popup-for-only-one-marker-react-map-gl */}
            {showPopup && (
              <Popup
                backgroundColor={"red"}
                longitude={-0.16038}
                latitude={50.898625}
                anchor="bottom"
                onClose={() => setShowPopup(false)}
              >
                this is th popup
              </Popup>
            )}

            {/* standard markers  */}

            <Marker longitude={-0.1367} latitude={50.8169} anchor="bottom" />
            {/*	Brighton Pier*/}

            <Marker latitude={50.8342} longitude={-0.2716} anchor="bottom">
              <img
                src={markerOrange}
                alt="centre of the map "
                style={{ width: "8%", height: "8%" }}
              />
              <div className="MarkerText">Greater Brighton area</div>
              {/*	central county 	*/}
            </Marker>

            <Marker latitude={50.8081} longitude={-0.3692} anchor="bottom" />
            {/*	Worthing Pier */}
            {/* ------------------- Data ---------------------*/}

            {/* -----Worthing ----------- */}
            <Marker
              latitude={50.813492}
              longitude={-0.372458}
              anchor="bottom"
            />
            <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
            <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
            <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
            <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
            <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
            <Marker
              latitude={50.811389}
              longitude={-0.431833}
              anchor="bottom"
            />
            <Marker
              latitude={50.811389}
              longitude={-0.431833}
              anchor="bottom"
            />
            {/* ----------Brighton ---------------- */}

            <Marker
              latitude={50.8191049}
              longitude={-0.1266938}
              anchor="bottom"
            />
            <Marker
              latitude={50.8232106}
              longitude={-0.1531099}
              anchor="bottom"
            />
            <Marker
              latitude={50.8198916}
              longitude={-0.1370037}
              anchor="bottom"
            />
            <Marker
              latitude={50.8249099}
              longitude={-0.159461}
              anchor="bottom"
            />
            <Marker
              latitude={50.8247482}
              longitude={-0.1531025}
              anchor="bottom"
            />
            <Marker
              latitude={50.8166144}
              longitude={-0.147456}
              anchor="bottom"
            />
            <Marker
              latitude={50.8145597}
              longitude={-0.1081976}
              anchor="bottom"
            />
            <Marker
              latitude={50.8242199}
              longitude={-0.14481}
              anchor="bottom"
            />
            <Marker
              latitude={50.8265146}
              longitude={-0.1520861}
              anchor="bottom"
            />
            <Marker
              latitude={50.8198085}
              longitude={-0.1355206}
              anchor="bottom"
            />
            <Marker
              latitude={50.8258599}
              longitude={-0.1513022}
              anchor="bottom"
            />
            <Marker
              latitude={50.8183453}
              longitude={-0.1253383}
              anchor="bottom"
            />
            <Marker
              latitude={50.8216405}
              longitude={-0.1308382}
              anchor="bottom"
            />
            <Marker
              latitude={50.8197701}
              longitude={-0.1254411}
              anchor="bottom"
            />
            <Marker
              latitude={50.819733}
              longitude={-0.133217}
              anchor="bottom"
            />
            <Marker
              latitude={50.8239702}
              longitude={-0.1584867}
              anchor="bottom"
            />
            <Marker
              latitude={50.824038}
              longitude={-0.158624}
              anchor="bottom"
            />
            <Marker
              latitude={50.819691}
              longitude={-0.1332213}
              anchor="bottom"
            />
            <Marker
              latitude={50.8196505}
              longitude={-0.1332363}
              anchor="bottom"
            />
            <Marker
              latitude={50.8172686}
              longitude={-0.1174275}
              anchor="bottom"
            />
            <Marker
              latitude={50.8163271}
              longitude={-0.1121712}
              anchor="bottom"
            />
            <Marker
              latitude={50.8177347}
              longitude={-0.1101429}
              anchor="bottom"
            />

            {/* --------------------------------------------- */}

            {/* ------------- Greater sussex  --------------- */}
            <Marker
              latitude={50.9325232}
              longitude={0.0298005}
              anchor="bottom"
            />
            <Marker
              latitude={50.8736115}
              longitude={0.0192103}
              anchor="bottom"
            />
            <Marker
              latitude={50.8746139}
              longitude={0.0051153}
              anchor="bottom"
            />
            <Marker
              latitude={51.072791}
              longitude={-0.200333}
              anchor="bottom"
            />
            <Marker latitude={51.100045} longitude={0.051609} anchor="bottom" />
            <Marker latitude={51.057329} longitude={0.054371} anchor="bottom" />
            <Marker
              latitude={51.109592}
              longitude={-0.016494}
              anchor="bottom"
            />
            <Marker
              latitude={51.109626}
              longitude={-0.016545}
              anchor="bottom"
            />
            <Marker
              latitude={51.109606}
              longitude={-0.016807}
              anchor="bottom"
            />
            <Marker
              latitude={50.929866}
              longitude={-0.219119}
              anchor="bottom"
            />
            <Marker
              latitude={50.929795}
              longitude={-0.219303}
              anchor="bottom"
            />
            <Marker
              latitude={51.109776}
              longitude={-0.017747}
              anchor="bottom"
            />
            <Marker
              latitude={51.132218}
              longitude={-0.011766}
              anchor="bottom"
            />
            <Marker latitude={50.874614} longitude={0.005115} anchor="bottom" />
            {/* --------------------------------------------- */}
            <NavigationControl />
          </Map>
        </div>
      </div>

      {/* Address */}
      <div>
        <div className="cardP">
          <MapContactCard
            ProjectName="Xr-H"
            Developer="© Jude Ricketts"
            SubTitle="Futuring the city's past"
            City="Greater Brighton"
            ProjectYear="2023"
            Socials="@xxx"
          />
        </div>
      </div>
    </div>
  );
};
