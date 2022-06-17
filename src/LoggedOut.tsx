import React, { FC, Fragment, useState } from "react";
import PlugButton from "./PlugButton";
export const LoggedOut: FC = () => {
  const [newClass, setNewClass] = useState("");
  const [plugNewClass, setPlugNewClass] = useState("opacity-0");
  return (
    <Fragment>
      <div
        className={[
          "h-screen w-screen absolute  bg-cover transition duration-1000 ",
          newClass,
        ].join(" ")}
        onClick={() => {
          setNewClass("backdrop-blur");
          setPlugNewClass("opacity-100");
        }}
      ></div>
      <div
        className={[
          "h-screen w-screen absolute flex justify-around content-around transition duration-1000 ",
        ].join(" ")}
      >
        <div
          className={[
            "flex flex-col justify-between transition-opacity  duration-1000",
            plugNewClass,
          ].join(" ")}
        >
          <div className="flex justify-around w-full flex-row">
            <div className="flex">
              <PlugButton dark />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoggedOut;
