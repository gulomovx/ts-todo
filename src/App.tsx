import { ChangeEvent, useState } from "react";
import { Idata } from "./interfaces/Index";

const App = (): JSX.Element => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const data: Idata[] = [
    { title: "web developer", id: 1, description: "react" },
    { title: "Ios developer", id: 2, description: "swift" },
    { title: "mobile developer", id: 3, description: "flutter" },
  ];
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<Idata[]>(data);
  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: "description",
    };
    setArr([...arr, newData]);
    setTitle("");
    console.log(title);
  };

  const deleteItem = (id: number): void => {
    const newData = arr.filter((item) => item.id !== id);
    setArr(newData);
  };
  return (
    <div className=" min-h-screen w-[800px] mx-auto border-black p-8 ">
      <h1 className="text-3xl  text-center pt-16 font-medium">Todo List</h1>
      <div className="bg-blue-300 px-4 py-2 rounded text-slate-600 text-center w-56 mx-auto mt-4 ">
        <button onClick={handleSubmit} className=" w-full">
          Add todo
        </button>
      </div>
      <input
        value={title}
        onChange={changeHandler}
        className="w-full px-4 py-2 rounded mt-2 outline-none bg-slate-100"
        type="text"
        placeholder="Enter todo"
      />
      {arr.length > 0 ?
        arr.map((item) => (
          <div
            className="bg-slate-200 mt-2 rounded px-2 py-2 capitalize flex justify-between items-center"
            key={item.id}
          >
            <p>{item.title}</p>
            <button
              onClick={() => deleteItem(item.id)}
              className="bg-red-300 px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        )): <p className="text-red-400 text-center text-2xl mt-2">No items left</p>}
    </div>
  );
};

export default App;
