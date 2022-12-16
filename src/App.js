import './App.css';
import Restcountries from './Component/Restcountries'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'

function App() {
  return (
    <div className="App">
        <h1>ResCountries All</h1>
         <Header></Header>
         <Restcountries></Restcountries>
         <Footer></Footer>
         
    </div>
  );
}

export default App;
