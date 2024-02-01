import React from "react";
import TopBar from "../components/Bars/TopBar";
import MenuBar from "../components/Bars/MenuBar";

export default function Main() {
  return (
    <div className="rounded-lg border-2 border-zinc-700 w-full min-h-screen h-full">
      <TopBar />
      <div className="flex">
        <MenuBar />
      </div>
    </div>
  );
}
