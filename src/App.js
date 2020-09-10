import React from "react";
import "./App.css";

// import ClassCount from "./components/UseState/ClassState";
// import FunctionCount from "./components/UseState/FunctionState";
// import LifecycleUpdate from './components/UseEffect/ClassLifeCycle';
// import HooksUseEffect from "./components/UseEffect/HooksUseEffect";
// import Counter from "./components/UseState/counter";
// import Counter2 from "./components/UseState/counter2";
// import Counter3 from "./components/UseState/Counter3";
// import ArrayUseState from "./components/UseState/ArrayUseState";
// import ConditionClass from "./components/UseEffect/conditionallyRun/class";
// import ConditionHooks from "./components/UseEffect/conditionallyRun/hooks";
// import HookMouse from "./components/UseEffect/OnlyOnce/HooksMouse";
// import MouseContainer from "./components/UseEffect/Unmount/MouseContainer";
// import IntervalHookCounter from "./components/UseEffect/IncorrectDependency/Dependency";
// import DataFetching from "./components/DataFetching/DataFetching";
// import DataFetchingWithId from "./components/DataFetching/DataFetchingWithId";
import ComponentC from "./components/Usecontext/ComponentsExample/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      {/* <ClassCount />
     <br></br>
     <FunctionCount /> */}

      {/* <LifecycleUpdate /> */}
      {/* <HooksUseEffect /> */}
      {/* <Counter /> <br />
     <h6>Using prevCount method</h6>
     <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <ArrayUseState /> */}
      {/* <ConditionClass /> */}
      {/* <ConditionHooks /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingWithId /> */}
      <UserContext.Provider value={"Nishekh"}>
        <ChannelContext.Provider value={"working in home"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
