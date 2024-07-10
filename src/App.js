import { BrowserRouter , Routes , Route } from "react-router-dom";
import React from 'react'; 
import './index.css';
import Navbar from "./components/navbar";
import Theme from "./components/theme";
import Error404 from './pages/errors/Error404';
import {BeatLoader} from 'react-spinners'


// page imports 
import Main from "./pages/main";
import Balanced from "./pages/tools/balanced";
import Age from "./pages/tools/age";  
import Calores from './pages/tools/calories';
import Codes from './pages/tools/codes';
import FileConvert from './pages/tools/fileConvert';
import TwoDates from './pages/tools/two-dates';
import Days from './pages/tools/days';


function App() {
  const [Loading , setLoading] = React.useState(true);
  const [theme , setTheme] = React.useState('light'); 

  React.useEffect(() => {

    const timer = setTimeout(() => setLoading(false) , 1500);
    return () => clearTimeout(timer); 
  } ,[])

  React.useEffect(() => {
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme === "dark") {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  },[])
  const loader_color = theme === "dark" ? "white" : "black"; 
  const loading_background_color = theme === "dark" ? "hsl(240 10% 3.9%)" : "#f2f2f2" ;
  return (
       <div className="App">
          {Loading ? (
    <div style={{backgroundColor:loading_background_color}} className="loading-page">
      <BeatLoader color={loader_color}/>
    </div> ) : (
<BrowserRouter>
<Navbar/>
<Routes>
    <>
    <Route path="*" element={<Error404/>}/>
    <Route  index element={<Main/>} exact path="/"/>
    <Route  exact element={<Main/>} path="univertools/tools/home"/>
    <Route exact  element={<Balanced/>} path="univertools/tools/balanced"/>
    <Route exact element={<Age/>} path="univertools/tools/age"/> 
    <Route exact element={<Calores/>} path="univertools/tools/calories"/> 
    <Route exact element={<Codes/>} path="univertools/tools/qrcode"/> 
    <Route exact element={<Codes/>} path="univertools/tools/barcode"/> 
    <Route exact element={<Days/>} path="univertools/tools/days"/> 
    <Route exact element={<TwoDates/>} path="univertools/tools/two-dates"/> 
    <Route exact element={<FileConvert/>} path="univertools/tools/file-convert"/>
    <Route exact element={<Main/>} path="univertools"/> 
 
    </>
</Routes>
</BrowserRouter> 
  )}
</div>
  );
}

export default App;
