import cookie from './assets/cookie.svg'
import alert from './assets/alert.svg'
import close from './assets/close.svg'

function App() {
  return (
    <div className="App">
      <div className="first-container">
        <img src={close} className="close" />
        <img src={cookie} className="cookie" />
        <p>Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.</p>
        <button>Tudo bem!</button>
      </div>

      <div className="second-container">
        <img src={close} className="close" />
        <img src={alert} className="alert" />
        <p>Você será deslogado imediatamente!</p>
        <button>Extender login</button>
      </div>
    </div>
  );
}

export default App;
