import './App.css'
import Header from '../../Componentes/Header'
import Main from '../../Componentes/Main'
import Dropdown from '../../Componentes/Dropdwon'
import AvaliarButton from '../../Componentes/AvaliarButton'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <div className="enredo">
        <div className="container">
          <Dropdown name="ENREDO"/>
          <p className='branco'>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>
        </div>
      </div>
      <div className="avaliacoes">
        <div className="container">
          <div className="dropdown-avaliacoes">
            <Dropdown name="AVALIAÇÕES DE USUÁRIOS"/>
            <AvaliarButton/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
