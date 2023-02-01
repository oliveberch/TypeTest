import React from "react";
import { TypingProvider } from "./state";
import { UserInput } from "./component/UserInput";
import { Preview } from "./component/Preview";
import { SpeedInfo } from "./component/SpeedInfo";

export const App = () => (
  <TypingProvider>
    <h1>Typing Speed Test</h1>
    <div className="container">
      <div className="typing-test">
        <Preview />
        <UserInput />
      </div>
      <SpeedInfo />
    </div>
  </TypingProvider>
);
