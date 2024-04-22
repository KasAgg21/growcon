import Landingpage from "./basic/Landingpage";
import Cons_Navbar from "./consumer/Cons_Navbar";
import Grower_Navbar from "./grower/Grower_Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./basic/Login";
import Signup from "./basic/Signup";
import Footer from "./basic/Footer";
import Grower_pending from "./grower/Grower_pending";
import Admin_main from "./admin/Admin_main";
import Errornotfound from "./basic/Errornotfound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cons/*" element={<Cons_Navbar></Cons_Navbar>}></Route>
          <Route path="/grower/*" element={<Grower_Navbar></Grower_Navbar>}></Route>
          <Route path="/grower_pending" element={<Grower_pending></Grower_pending>}></Route>
          <Route path="/admin" element={<Admin_main></Admin_main>}></Route>
          <Route path="/*" element={<Errornotfound></Errornotfound>}></Route>
        </Routes>
      </BrowserRouter>
      <footer className=" bottom-0  ">
        {Footer()}
      </footer>
    </div>
  );
}
export default App;
