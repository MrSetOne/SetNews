import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import NewNews from './components/NewNews/NewNews';
import Footer from './components/Footer/Footer';
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<Main/>}/>
            <Route path="/newnews" element={<NewNews/>}/>
          </Routes>
          <Footer/>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
