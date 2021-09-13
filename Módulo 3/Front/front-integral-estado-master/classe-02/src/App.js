import kelvin from './assets/kelvin-costa.png'

import {useState} from 'react'

function App() {

  const [seguir, setSeguir] = useState('SEGUIR');
  const [seguidores, setSeguidores] = useState('140 seguidores');

  function Seguir() {
    const seguindo = seguir === 'SEGUIR' ? 'SEGUINDO' : 'SEGUIR';
    const seguidoress = seguidores === '140 seguidores' ? '141 seguidores' : '140 seguidores';

    setSeguir(seguindo);
    setSeguidores(seguidoress);
  }


  return (
    <div className="App">
      <div className="card">
        <img className="kelvin" src={kelvin} alt="kelvin" />
        <h2>Kelvin Costa</h2>
        <p>@costa</p>

        <div className="statistics">
          <p>{`${seguidores}` }</p>
        <p>207 seguindo</p>
        </div>
      </div>
      <button onClick={Seguir} className={seguir}>{`${seguir}`}</button>
    </div>
  );
}

export default App;
