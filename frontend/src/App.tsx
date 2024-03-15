import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";

export default function App() {
  return (
    <>
    <BrowserRouter>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}