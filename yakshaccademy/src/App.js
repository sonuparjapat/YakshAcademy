import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import GlobalStyles from './GlobelStyles';
import Dashboard from './pages/AdminSide/Dashboard/Dashboard';

function App() {
  return (
   <>   <GlobalStyles/>
    <div className="App">
    <Dashboard/>
{/* <AllRoutes/> */}
    </div></>
  );
}

export default App;
