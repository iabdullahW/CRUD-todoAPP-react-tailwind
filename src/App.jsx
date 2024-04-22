import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const addNew = () => {
    if (todo.trim() !== "") { // Check if todo is not empty or whitespace
      if (editIndex !== -1) {
        const newList = [...list];
        newList[editIndex] = todo;
        setList(newList);
        setEditIndex(-1);
      } else {
        setList([...list, todo]);
      }
      setTodo("");
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => index !== i));
    if (editIndex === index) {
      setEditIndex(-1);
    }
  };

  const handleEdit = (index) => {
    setTodo(list[index]);
    setEditIndex(index);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Todo App</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          placeholder="Add new todo"
          className="flex-grow border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 px-4 py-2 mr-4 rounded-md text-lg text-gray-900"
        />
        <button
          onClick={addNew}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
        >
          {editIndex === -1 ? "Add" : "Update"}
        </button>
      </div>
      <div className="text-lg">
        {list.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 px-4 py-2 mb-4 rounded-md shadow-md hover:shadow-lg"
          >
            <span>{name}</span>
            <div>
              <button
                onClick={() => handleDelete(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-md shadow-md mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="px-2 py-1 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
