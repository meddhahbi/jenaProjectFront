import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainInterface from './Component/MainInterface';
import Home from './Component/pages/Home';
import CategoriesList from './Component/pages/CategoriesList';
import GigList from './Component/pages/GigList';
import GigRating from './Component/pages/GigRating';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<MainInterface />}>

          <Route index element={<Home />} />
          <Route path='/category' element={<CategoriesList />}/>
          <Route path='/gig' element={<GigList />}/>
          <Route path='/reviews' element={<GigRating />}/>


      </Route>
    </Routes>
   </div>
  );
}

export default App;
