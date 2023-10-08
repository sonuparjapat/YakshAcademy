import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import GlobalStyles from './GlobelStyles';
import Dashboard from './pages/AdminSide/Dashboard/Dashboard';
import Chartcomponent from './pages/AdminSide/Dashboard/Chart';


function App() {
  return (
   <>   <GlobalStyles/>
    <div className="App">
    {/* <Dashboard/> */}
<AllRoutes/>
{/* <Chartcomponent/> */}
    </div></>
  );
}

export default App;
