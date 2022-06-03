import { useState, useEffect } from "react";
const lists = [
  {
    id: 1,
    name: "Ăn cơm",
  },
  {
    id: 3,
    name: "Học bài",
  },
  {
    id: 23,
    name: "Học nấu ăn",
  },
];
function Sangpro() {
  const [listId, setListId] = useState(1);
  return (
    <div>
      {lists.map((list) => {
        return (
          <li
            key={list.id}
            style={{
              color: list.id === listId ? "yellow" : "purple",
              backgroundColor: listId === list.id ? "purple" : "yellow",
              cursor: "pointer"
            }}
            onClick={() => setListId(list.id)}
          >
            {list.name}
          </li>
        );
      })}
    </div>
  );
}

export default Sangpro;
