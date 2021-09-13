import cookie from './assets/cookie.svg'
import close from './assets/close.svg'
import {useState} from 'react'

function App() {

  const [container, setContainer] = useState('hidden');

  function Exibir() {
    const containerAparece = container === 'hidden' ? 'visibility' : 'hidden';


    setContainer(containerAparece);
  }


  return (
    <div className="App">
      <button onClick={Exibir}>CLIQUE AQUI!</button>
      <div className={`container ${container}`}>
        <img className="close" src={close} alt="close" />
        <img className="cookie" src={cookie} alt="cookie" />
        <h2>Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.</h2>
        <button>Tudo bem!</button>
      </div>
    </div>
  );
}

export default App;
