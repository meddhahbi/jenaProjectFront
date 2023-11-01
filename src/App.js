import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainInterface from './Component/MainInterface';
import Home from './Component/pages/Home';
import CategoriesList from './Component/pages/CategoriesList';
import ProjectsList from './Component/pages/ProjectsList';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<MainInterface />}>

          <Route index element={<Home />} />
          <Route path='/category' element={<CategoriesList />}/>
          <Route path='/project' element={<ProjectsList />}/>


      </Route>
    </Routes>
   </div>
  );
}

export default App;
