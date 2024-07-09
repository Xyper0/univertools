import { BrowserRouter , Routes , Route } from "react-router-dom";
import Main from "./pages/main";
import Balanced from "./pages/tools/balanced";
import Age from "./pages/tools/age";  
import './index.css';
import Navbar from "./components/navbar";
import Theme from "./components/theme";
import Error404 from './pages/errors/Error404';

function App() {
  return (
       <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="*" element={<Error404/>}/>
  <Route  index element={<Main/>} exact path="/"/>
  <Route  exact element={<Main/>} path="/home"/>
  <Route exact  element={<Balanced/>} path="/balanced"/>
  <Route exact element={<Age/>} path="/age"/> 
</Routes>
</BrowserRouter> 
</div>
  );
}

export default App;
