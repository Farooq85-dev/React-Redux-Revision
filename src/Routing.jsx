import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./parent";
import Child from "./child";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Parent />} path="/p" />
          <Route element={<Child />} path="/c" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
