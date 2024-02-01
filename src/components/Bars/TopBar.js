import React, { useState } from "react";

const toolBar = ["File", "Edit", "View", "Help"];

export default function TopBar() {
  const [searchBar, setSearchBar] = useState(false);
  const handleSearchBar = () => setSearchBar(!searchBar);

  return (
    <div className="w-full py-[4px] px-3 text-sm border-b border-red-500">
      <div className="flex gap-5 justify-evenly">
        <div className="flex-1 flex gap-3 items-center">
          <div className="">
            <img src="" className="object-cover" alt="logo" />
          </div>
          <div className="flex">
            {toolBar.map((item, index) => (
              <p
                key={index}
                className="cursor-default rounded-[5px] hover:bg-white hover:bg-opacity-20 px-2 py-[1px] text-[13px]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex-[1.5] flex justify-center items-center relative">
          {searchBar && (
            <div className="absolute top-0 left-0 right-0 w-full bg-black h-32 py-2">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="w-full border border-zinc-700 bg-zinc-900 outline-none rounded-sm p-[2px] px-2"
                  placeholder="Search or jump to..."
                  autoFocus
                  onBlur={() => setSearchBar(false)}
                />
                <div className="text-[14px] flex flex-col">
                  <button className="bg-white bg-opacity-15 text-green-500 rounded-[4px] px-2 py-[1px]">
                    Go to file
                  </button>
                  <button className="hover:bg-white hover:bg-opacity-15 rounded-[4px] px-2 py-[1px]">
                    Go to symbol
                  </button>
                  <button className="hover:bg-white hover:bg-opacity-15 rounded-[4px] px-2 py-[1px]">
                    Open settings
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="w-full flex gap-3 justify-center">
            <button>{"<"}</button>
            <button>{">"}</button>
            <button
              onClick={handleSearchBar}
              className="max-w-[35rem] w-full text-center border-2 border-zinc-700 bg-zinc-900 rounded-lg py-[2px]"
            >
              <p>portfolio</p>
            </button>
          </div>
        </div>
        <div className="flex-1">3</div>
      </div>
    </div>
  );
}
