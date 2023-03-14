
import './App.css';
// import StateAdditionComponent from './state/StateAdditionComponent';
// import ConditionComponent from './ConditionComponent';
// import MapComponent from './MapComponent';
// import EventComponent from './state/EventComponent';
// import StateComponent from './state/StateComponent';
import TripleRecursiveComponent from './TripleRecursiveComponent';
// import GeneratorComponent from './GeneratorComponent';
// import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Merhaba Godoros</h1>

        {/* <StateAdditionComponent/> */}
        <TripleRecursiveComponent/>

        {/* <StateComponent/> */}
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
