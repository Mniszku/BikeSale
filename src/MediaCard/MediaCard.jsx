import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const MediaCard = (props) => {
  const { IconButtons, backgroundImage, title, text } = props;

  return (
    <>
      <Card>
        <div style={{ position: "relative" }}>
          <CardMedia
            style={{ height: "100%" }}
            component="img"
            src={backgroundImage}
          />
          <div
            style={{
              position: "absolute",
              color: "white",
              width: 320,
              top: "3vw",
              left: "6vw",

              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "2vw",
              //transform: "translateX(-50%)",
            }}
          >
            {title}
          </div>

          <div
            style={{
              position: "absolute",
              display: "inline-block",
              fontFamily: "SofiaPro",
              fontWeight: 400,
              fontSize: "1vw",
              top: "8vw",
              left: "6vw",
            }}
          >
            {text}
            <br></br>
            {IconButtons}
            <div
              style={{
                marginTop: "13vw",
                marginLeft: "14vw",
              }}
            >
              <Button
                style={{
                  textTransform: "none",
                  background: "#66CCFF",
                  borderRadius: 10,
                  border: "none",
                  height: "2vw",
                  width: "10vw",
                  color: "white",
                  fontSize: "0.7vw",
                }}
              >
                <p style={{ color: "black" }}> Sprawdź ofertę!</p>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default MediaCard;
