import React from "react";

export default function MenuBar() {
  return (
    <div className="p-1 text-[12px] border-r h-full min-w-44">
      <div className="flex flex-col gap-">
        <p className="p-4">EXPLORER</p>
        <div>
          <p className="font-semibold">PORTFOLIO</p>
        </div>
      </div>
    </div>
  );
}
