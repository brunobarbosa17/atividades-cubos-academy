import anna from './assets/anna-bia.png'
import charles from './assets/charles-santos.png'
import kelvin from './assets/kelvin-costa.png'
import mario from './assets/mario-hisashi.png'

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <h2>{props.nome}</h2>
      <p>{props.user}</p>
      
      <div className="statistics">
        <p>{props.seguidores}</p>
        <p>{props.seguindo}</p>
      </div>
    </div>
  )
}

function App() {
  const cards = [
    { img: kelvin, nome: "Kelvin Costa", user: "@costa", seguidores: "140 seguidores", seguindo: "207 seguindo" },
    { img: charles, nome: "Charles Santos", user: "@charles.santos", seguidores: "302 seguidores", seguindo: "419 seguindo" },
    { img: anna, nome: "Anna Bia", user: "@anab", seguidores: "842 seguidores", seguindo: "150 seguindo" },
    { img: mario, nome: "Mario Hisashi", user: "@hisashi", seguidores: "28 seguidores", seguindo: "17 seguindo" },
  ]
  
  return (
    <div className="App">
      <div className="row">
        {cards.map(function (card) {
          return <Card img={ card.img}nome={card.nome} user={card.user} seguidores={card.seguidores} seguindo={card.seguindo} />
        })}
      </div>
    </div>
  );
}

export default App;
