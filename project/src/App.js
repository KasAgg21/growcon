import Signup from "./basic/Signup";
import Login from "./basic/Login";
import Growerprofile from "./grower/Growerprofile";
import Availprod from "./grower/Availprod";
import Listofprod from "./grower/Listofprod";
import Navbar from "./basic/Navbar";
function App() {
  return (
    <div className="App">
      {/* <div>
      {Signup()}
    </div> */}
      {/* <div>
      {Login()}
    </div> */}
      {/* <div>
      {Growerprofile()}
    </div> */}
      {/* <div>
        {Availprod()
        }
      </div> */}
      {/* <div>
        {Listofprod()}
      </div> */}
      <div>
        {
          Navbar()
        }
      </div>
    </div>
  );
}

export default App;
