
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./components/Pages/Homepage.tsx";
import Filterpage from "./components/Pages/Filterpage.tsx";
import Itempage from "./components/Pages/Itempage.tsx";


function App() {
    
 
    return (
    <Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/filter" element={<Filterpage />} />
      <Route path="/items/:itemId" element={<Itempage />} />
		</Routes>

    );
}
 
export default App;
//1069-1920px
//0-767px