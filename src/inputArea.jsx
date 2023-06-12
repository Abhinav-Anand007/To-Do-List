import React from "react";
import Fab from "@mui/material/Fab";

function InputArea(props) {
  const cssBtn = {
    padding: "0.1rem 0.7rem",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "1rem",
    backgroundColor: "#B799FF",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#a555ec"
    }
  };

  return (
    <div>
      <input
        className="inputField"
        type="text"
        onChange={props.handleChangeFunc}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.addToListFunc(e);
          }
        }}
        value={props.value}
      />

      <Fab
        color="primary"
        aria-label="add"
        sx={cssBtn}
        onClick={props.addToListFunc}
      >
        Add
      </Fab>
    </div>
  );
}

export default InputArea;
