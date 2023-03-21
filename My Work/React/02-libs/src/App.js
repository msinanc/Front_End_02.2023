// import logo from './logo.svg';
import './App.css';
// import { FetchGet } from './fetch/FetchGet';
// import MyApp from './HelloWorld';
// import MenuAppBar from './mui/MenuAppBar';
// import ResponsiveGrid from './mui/ResponsiveGrid';
// import { FetchList } from './fetch/FetchList';
// import HWSituationOutside from './context/HW/HWSituationOutside';
// import ApplicationRoutes from './routing/application/ApplicationRoutes';
// import SituationOutside from './context/SituationOutside';
// import GrandmaComponent from './context/GrandmaComponent';
import { Provider } from 'react-redux';
import store from './redux/coreStore';
import SelectComponent from './advanced/SelectComponent';
import FormikUse from './formik/FormikUse';
// import HolderComponent from './redux/HolderComponent';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <header className="App-header">
          {/* <MenuAppBar /> */}

          {/* <GrandmaComponent/> */}
          {/* <SituationOutside/> */}
          {/* <ApplicationRoutes /> */}

          {/* <HWSituationOutside/> */}

          {/* <FetchList/> */}
          {/* <FetchGet /><br /> */}

          {/* <MyApp /> */}
          {/* <HolderComponent/> */}
          <SelectComponent/>
          <FormikUse/>
        </header>


        {/* <ResponsiveGrid /> */}
      </div>
    </Provider>
  );
}

export default App;
