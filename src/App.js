import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainInterface from "./Component/MainInterface";
import Home from "./Component/pages/Home";
import CategoriesList from "./Component/pages/CategoriesList";
import { Alert } from "./Component/pages/alert/Alert";
import { ReplyAlert } from "./Component/pages/alert/ReplyAlert";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainInterface />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<CategoriesList />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/reply" element={<ReplyAlert />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
