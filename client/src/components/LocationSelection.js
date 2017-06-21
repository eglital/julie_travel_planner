import React from "react";
import { Card, CardBlock, CardTitle } from "reactstrap";
import Dotdotdot from "react-dotdotdot";

const LocationSelection = props => {
  console.log("render locationSelection");
  const { location, section, itineraryId, onClick } = props;
  if (!location.photo) {
    location.photo =
      "http://images.clipartpanda.com/smiley-face-clip-art-niXoRMbiB.png";
  }

  return (
    <Card
      className="hoverable"
      style={{
        marginBottom: "10px",
        maxWidth: "500px",
        borderColor: "#C17DBF",
        cursor: "pointer"
      }}
      onClick={onClick}
      data-loc={JSON.stringify(location)}
      data-section={section}
      data-itinerary-id={itineraryId}
    >
      <CardBlock style={{ padding: "10px" }}>
        <div
          style={{
            display: "inline-block",
            backgroundImage: `url(${location.photo})`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "150px",
            width: "33%",
            height: "100px",
            float: "left",
            marginRight: "5%"
          }}
        />
        <div style={{ display: "inline-block", float: "left", width: "60%" }}>
          <CardTitle
            className="text-center"
            style={{ fontSize: "18px", marginTop: "-2px", marginBottom: "2px" }}
          >
            <Dotdotdot clamp={1}>
              {location.name}
            </Dotdotdot>
          </CardTitle>
          <div
            style={{
              fontSize: "14px",
              height: "81px",
              overflow: "hidden"
            }}
          >
            <Dotdotdot clamp={4}>
              <strong>{location.category}</strong> - {location.tip}
            </Dotdotdot>
          </div>
        </div>
      </CardBlock>
    </Card>
  );
};

export default LocationSelection;
