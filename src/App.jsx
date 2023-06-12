import React from "react";
import ListItem from "./ListItem";
import InputArea from "./inputArea";

function App() {
  const List = [];
  const [doList, setDoList] = React.useState(List);
  const [val, setVal] = React.useState("");

  function handleChange(event) {
    setVal(event.target.value);
  }

  function addToList(event) {
    setDoList((prevValue) => {
      return [...prevValue, val];
    });
    setVal("");

    event.preventDefault();
  }

  function funcRemove(id) {
    setDoList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="toDoFull">
      <h1 className="heading">To-do List</h1>
      <form className="form">
        <InputArea
          handleChangeFunc={handleChange}
          addToListFunc={addToList}
          value={val}
        />
        <ul className={doList.length === 0 ? "none" : "listFullDiv"}>
          {doList.map((ob, index) => {
            return (
              <ListItem
                key={index}
                id={index}
                item={ob}
                removeFn={funcRemove}
              />
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
