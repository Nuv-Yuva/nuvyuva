import React, { useState } from "react";
import {
  GoogleMap,
  InfoBox,
  InfoWindow,
  LoadScript,
  Marker,
  OverlayView,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Button, Card } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "450px",
};
//22.294675, 73.118827
const center = {
  position: { lat: 22.294675, lng: 73.118827 },
  label: "Concert Ground",
  link: "https://goo.gl/maps/2cWuZvLZkUgviSX7A",
};

const nuv = {
  position: { lat: 22.2926952, lng: 73.1200915 },
  label: "Navrachna University",
  link: "https://goo.gl/maps/S1vgHq82GhJqzwNa8",
};

const GoogleMaps = () => {
  const [centers, setCenter] = useState(center);

  const onLoad = (infoWindow) => {
    console.log("infoWindow: ", infoWindow);
  };

  return (
    <div className="Maps">
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#000115",
        }}
      >
        <div style={{ display: "block", margin: "10px" }}>
          <h2
            style={{
              color: "#f3f3f7",
              letterSpacing: "6px",
              textAlign: "center",
              fontFamily: 'Playfair Display',
            }}
          >
            LOCATIONS
          </h2>
        </div>
        <div style={{ display: "block" }}>
          <Button
            style={{
              margin: "15px 15px 20px 15px",
              border: "none",
              background: "linear-gradient(90deg, #B40A98 0%, #570658 100%)",
              boxShadow: "none",
            }}
            onClick={() => setCenter(center)}
          >
            CONCERT GROUND
          </Button>
          <Button
            style={{
              margin: "15px 15px 20px 15px",
              border: "none",
              background: "linear-gradient(90deg, #B40A98 0%, #570658 100%)",
              boxShadow: "none",
            }}
            onClick={() => setCenter(nuv)}
            variant="secondary"
          >
            ALL EVENTS
          </Button>
        </div>
      </div>
      <LoadScript googleMapsApiKey={"AIzaSyDPK4W-mdjPmzRnJAgB63bHm9KiiyZ6bJM"}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: 22.294991, lng: 73.124237 }}
          zoom={15}
        >
          <OverlayView mapPaneName="floatPane" position={centers.position}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{centers.label}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Event Name
                </Card.Subtitle>

                <Card.Link target={"_blank"} href={centers.link}>
                  Direction
                </Card.Link>
              </Card.Body>
            </Card>
          </OverlayView>
          <Marker position={centers.position} title={"Concert Ground"} />

          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default GoogleMaps;
