import './App.css'
import Header from '../../Componentes/Header'
import Main from '../../Componentes/Main'
import Dropdown from '../../Componentes/Dropdwon'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <div className="avaliacoes">
        <div className="container">
          <Dropdown/>
          <p className='branco'>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>
        </div>
      </div>
    </>
  )
}

export default App
