import { useState } from "react";
import "./App.css";
import TodoSearch from "./components/TodoSearch";
import TodoListItem from "./components/TodoListItem";

function App() {
  const [lists, setLists] = useState(localStorage.getItem('lists') ? localStorage.getItem('lists').split(',') : []);

  const addListItem = (text) => {
    if (text !== "") {
      setLists([...lists, text]);
      localStorage.setItem('lists', [...lists, text]);
    }
  };

  const dltListItem = (index) => {
    const newList = [...lists];
    newList.splice(index, 1);
    setLists([...newList]);
    localStorage.setItem('lists', [...newList]);
  };

  return (
    <div className="container my-5">
      <TodoSearch listItem={addListItem} />
      <h2 className="text-light my-4 pb-3 border-bottom border-success">
        ToDos
      </h2>
      <ul className="list-group">
        {lists.map((item, index) => {
          return (
            <TodoListItem
              key={index}
              index={index}
              itemText={item}
              dlt={dltListItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
