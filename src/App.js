import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (todos.some((item) => item.value === text)) {
      toast.warn("Job have been existed!");
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: text.replace(/\s/g, ""),
          value: text,
        },
      ]);
      toast.success("Add successfully!");
    }
    setText("");
  };

  const handleRemoveTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
    toast.success("Remove successfully!");
  };

  return (
    <div className="h-screen relative bg-gray-100">
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-2 rounded-lg p-1 border border-blue-300 shadow shadow-black-500/40 hover:shadow-indigo-500/40">
        <div className="flex gap-2">
          <input
            autoComplete="off"
            type="text"
            className="outline-none border-2 border-blue-300 rounded-lg px-2 py-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="button"
            className="outline-none bg-blue-600 px-2 py-1 rounded-lg text-white font-medium"
            onClick={handleClick}
          >
            Button
          </button>
        </div>
        <ul className="w-full px-5">
          {todos?.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between gap-5 py-1 w-full"
              >
                <li>{item.value}</li>
                <span
                  onClick={() => handleRemoveTodo(item.id)}
                  className="border border-blue-500 px-3 py-1 rounded-lg bg-red-400 cursor-pointer"
                >
                  X
                </span>
              </div>
            );
          })}
        </ul>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
