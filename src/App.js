import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainInterface from './Component/MainInterface';
import Home from './Component/pages/Home';
import CategoriesList from './Component/pages/CategoriesList';

import BlogList from './Component/pages/blogLitst';
import CommentList from './Component/pages/commentList';


import GigList from './Component/pages/GigList';
import GigRating from './Component/pages/GigRating';

import ProjectsList from './Component/pages/ProjectsList';
import { Alert } from "./Component/pages/alert/Alert";
import { ReplyAlert } from "./Component/pages/alert/ReplyAlert";
import OffersList from "./Component/pages/OffersList";
import SkillsList from "./Component/pages/SkillsList";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainInterface />}>
          <Route index element={<Home />} />
          <Route path='/category' element={<CategoriesList />}/>
          <Route path='/blogs' element={<BlogList />}/>
          <Route path='/comments' element={<CommentList />}/>

          <Route path='/gig' element={<GigList />}/>
          <Route path='/reviews' element={<GigRating />}/>

          <Route path='/project' element={<ProjectsList />}/>


          <Route path="/offer" element={<OffersList />} />
          <Route path="/skill" element={<SkillsList />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/reply" element={<ReplyAlert />} />
      </Route>
    </Routes>
   </div>
  );
}

export default App;
