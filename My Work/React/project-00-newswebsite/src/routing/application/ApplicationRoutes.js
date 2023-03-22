import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { About } from '../../about/About';
import Home from '../../home/Home';

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} >
            <Route index element={<Home/>} />

            <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
