import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function ListItem(props) {
  const [style, setStyle] = React.useState("none");
  function crossOver() {
    setStyle((prevVal) => (prevVal === "none" ? "line-through" : "none"));
  }

  return (
    <div className="listDiv">
      <li
        className="listElement"
        onClick={crossOver}
        style={{ textDecoration: style }}
      >
        {props.item}
      </li>
      <RemoveCircleIcon
        className="delbtn"
        onClick={() => {
          props.removeFn(props.id);
        }}
      />
    </div>
  );
}

export default ListItem;
