
import './App.css';
// import ConditionComponent from './ConditionComponent';
// import MapComponent from './MapComponent';
// import EventComponent from './state/EventComponent';
import StateComponent from './state/StateComponent';
// import GeneratorComponent from './GeneratorComponent';
// import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Merhaba Godoros</h1>
        <StateComponent/>


        {/* <EventComponent/> */}
        {/* <MyComponent/> */}
        {/* <GeneratorComponent company="Godoro" department="Education"/><br/> */}
        {/* <GeneratorComponent company="Fibiler" department="History"/><br/> */}
        {/* <ConditionComponent/> */}
        {/* <MapComponent/> */}
      </header>
    </div>
  );
}

export default App;
