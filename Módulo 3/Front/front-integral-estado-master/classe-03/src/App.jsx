import hamburger from './assets/hamburguer.png'

import {useState} from 'react'

function App() {

  const [quantidade, setQuantidade] = useState(0);

  function Increase() {
    setQuantidade(quantidade+1);
  }

  function Decrease() {
    setQuantidade(quantidade-1);
  }
  


  return (
    <div className="App">
      <div className="container">
        <img src={hamburger} alt="hamburger" />

        <h2>Hamburger</h2>

        <p>Arcu, sagittis, ut lectus 
        congue dapibus semper odio a, lobortis. 
        </p>

        <div className="buy">
          <div onClick={Decrease} className="decrease"> - </div>
          <p>{`${quantidade}` }</p>
          <div onClick={Increase} className="increase"> + </div>
        </div>
      </div>
    </div>
  );
}

export default App;
