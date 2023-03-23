import './App.css';
import HeaderBarComponent from './basic/HeaderBarComponent'
import ThinHeaderBar from './basic/ThinHeaderBar';
import ApplicationRoutes from './routing/application/ApplicationRoutes';

function App() {
  return (
    <div className="App">
        <ThinHeaderBar/>
        <HeaderBarComponent/>
        
        <ApplicationRoutes/>

        

    </div>
  );
}

export default App;
