import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainInterface from './Component/MainInterface';
import Home from './Component/pages/Home';
import CategoriesList from './Component/pages/CategoriesList';
import BlogList from './Component/pages/blogLitst';
import CommentList from './Component/pages/commentList';
function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<MainInterface />}>

          <Route index element={<Home />} />
          <Route path='/category' element={<CategoriesList />}/>
          <Route path='/blogs' element={<BlogList />}/>
          <Route path='/comments' element={<CommentList />}/>


      </Route>
    </Routes>
   </div>
  );
}

export default App;
