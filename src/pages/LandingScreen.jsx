import React, { useEffect } from "react";

export default function LandingScreen() {
  let date = new Date().toUTCString();

  const handleKeyDown = (e) => {
    e.preventDefault();
    window.location.href = "/home";
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="min-h-screen h-full w-full p-3 flex justify-center items-center">
      <code className="max-w-screen-sm w-full min-h-[50vh] flex flex-col gap-6">
        {/* Login */}
        <div className="text-orange">
          <p>login: admin</p>
          <div className="flex gap-3 items-center">
            <p>password:</p>
            <p className="w-[12px] h-[17px] bg-orange mb-2"></p>
          </div>
        </div>

        <div>
          <p>login success</p>
          <p>last login: {date}</p>
          <p className="text-orange">
            [visitor@udhav ~]$ <span className="text-sky-400">npm</span>
            <span className="text-white"> start</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 text-orange">
          <p className="text-green-400">Starting the production server...</p>
          <p>
            <span className="text-amber-200">Compiled Successfully!</span>
          </p>

          <p>
            You can now view{" "}
            <span className="text-sky-400 font-bold">portfolio</span> in the
            browser.
          </p>
          <div className="pl-10 w-max flex gap-4">
            <div>
              <p className="font-bold">Local: </p>
              <p className="font-bold">On Your Network: </p>
            </div>
            <div>
              <p>http://localhost:3000</p>
              <p>http://www.w-udhav.com</p>
            </div>
          </div>
        </div>

        <div>Press any key to continue...</div>
      </code>
    </div>
  );
}
