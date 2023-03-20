// import logo from './logo.svg';
import './App.css';
import { FetchGet } from './fetch/FetchGet';
import MyApp from './HelloWorld';
import MenuAppBar from './mui/MenuAppBar';
import ResponsiveGrid from './mui/ResponsiveGrid';
// import { FetchList } from './fetch/FetchList';
// import HWSituationOutside from './context/HW/HWSituationOutside';
import ApplicationRoutes from './routing/application/ApplicationRoutes';
// import SituationOutside from './context/SituationOutside';
// import GrandmaComponent from './context/GrandmaComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuAppBar/>
        {/* <GrandmaComponent/> */}
        {/* <SituationOutside/> */}
        <ApplicationRoutes/>

        {/* <HWSituationOutside/> */}

        {/* <FetchList/> */}
        <FetchGet/><br/>

        <MyApp/>
      </header>


        <ResponsiveGrid/>
    </div>
  );
}

export default App;
