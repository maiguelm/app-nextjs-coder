"use client";


export function Counter({ count, setCount }) {
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex">
          <button
            className="bg-origin-border mr-[8px] p-4 border-4 text-base bg-slate-500 rounded-lg hover:bg-slate-700"
            onClick={increase}
          >
            {" "}
            +
          </button>
          <span className="text-base p-3"> {count} </span>
          <button
            className="bg-origin-border ml-[8px] p-4 border-4 text-base bg-slate-500 rounded-lg hover:bg-slate-700"
            onClick={decrease}
          >
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    </>
  );
}
