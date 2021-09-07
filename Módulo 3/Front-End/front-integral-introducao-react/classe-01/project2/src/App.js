import profile from './assets/profile.png'
import './App.css';

function App() {
  return (    
    <div className="container">
      <img className="img" src={ profile }/>
        <h1 className="nome">Kelvin Costa</h1>
        <p className="user">@costa</p>

        <div className="baixo">
        <p className="seguidores">140 seguidores'/n'207 seguindo</p>
        </div>
    </div>
  );
}

export default App;
