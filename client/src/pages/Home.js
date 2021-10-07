import React from "react";
import SmallView from "../views/smallView";
import LargeView from "../views/largeView";

export default function Home() {
  return (
      <div className="App">
        <LargeView/>
        <SmallView/>
      </div>
    );
  }
  