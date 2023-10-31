import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainInterface from './Component/MainInterface';
import Home from './Component/pages/Home';
import CategoriesList from './Component/pages/CategoriesList';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<MainInterface />}>

          <Route index element={<Home />} />
          <Route path='/category' element={<CategoriesList />}/>


      </Route>
    </Routes>
   </div>
  );
}

export default App;
