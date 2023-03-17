// import logo from './logo.svg';
import './App.css';
import { FetchGet } from './fetch/FetchGet';
// import { FetchList } from './fetch/FetchList';
// import HWSituationOutside from './context/HW/HWSituationOutside';
import ApplicationRoutes from './routing/application/ApplicationRoutes';
// import SituationOutside from './context/SituationOutside';
// import GrandmaComponent from './context/GrandmaComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <GrandmaComponent/> */}
        {/* <SituationOutside/> */}
        <ApplicationRoutes/>

        {/* <HWSituationOutside/> */}

        {/* <FetchList/> */}
        <FetchGet/>

        
      </header>
    </div>
  );
}

export default App;
