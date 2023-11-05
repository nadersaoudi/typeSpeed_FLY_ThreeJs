import { BrowserRouter, Route, Routes } from "react-router-dom";
import TypingSpeed from "./page/TypingSpeed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello World</div>} />
          <Route path="/typing" element={<TypingSpeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
