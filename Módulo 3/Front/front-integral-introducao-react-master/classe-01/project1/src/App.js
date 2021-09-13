import './App.css';
import lupa from './assets/icone-lupa.svg';
import globo from './assets/icone-globo.svg';
import mapa from './assets/icone-mapa.svg';

function App() {
  return (
    <div className="container">
        <h2>Browse collections</h2>


        <div className="row">
            <div className="search">
                <img src={lupa}/>
                <h2>Search</h2>
                <p>Search in any topic you are interested and find any answers you need.</p>
                <a href="#">Learn more about Search</a>
            </div>
            <div className="browser">
          <img src={ globo}/>
                <h2>Browser</h2>
                <p>Search in any topic you are interested and find any answers you need.</p>
                <a href="#">Learn more about Browser</a>
            </div>

            <div className="maps">
          <img src={mapa }/>
                <h2>Maps</h2>
                <p>Search in any topic you are interested and find any answers you need.</p>
                <a href="#">Learn more about Maps</a>
            </div>
        </div>
    </div>
  );
}

export default App;
