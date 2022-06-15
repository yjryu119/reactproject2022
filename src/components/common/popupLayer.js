import React from "react";
import { Button } from "react-bootstrap";
import classes from "../../scss/popupLayer.module.scss";

const PopupLayer = ({ layer, layerText, setLayer, btnBottom }) => {
  const closeScroll = () => {
    document.body.style.overflow = "scroll";
  };
  return (
    <>
      {layer ? (
        <>
          <div
            className={classes.bgPaper}
            onClick={() => {
              setLayer(false);
              closeScroll();
            }}
          ></div>
          <div className={`${classes.wrapper} d-center`}>
            <div className="d-center-hor">
              <div className={classes.layerText}>{layerText}</div>
              <Button
                className="customized-btn"
                variant="dark"
                onClick={() => {
                  setLayer(false);
                  closeScroll();
                }}
              >
                {btnBottom}
              </Button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default PopupLayer;
