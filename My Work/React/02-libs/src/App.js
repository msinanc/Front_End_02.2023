// import logo from './logo.svg';
import './App.css';
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
      </header>
    </div>
  );
}

export default App;
