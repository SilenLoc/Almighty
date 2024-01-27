import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PText } from "./components/text.tsx";
import NavBar from "./nav.tsx";
import Editor from "./edit/editor/editor.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Greet from "./Greet.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
        />
        {/* Same as */}
        <ToastContainer />
        <Routes>
          <Route path="/">
            <Route index element={<Editor />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/greet" element={<Greet />} />
            <Route path="/settings" element={<PText>Settings</PText>} />
          </Route>
          ,
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
