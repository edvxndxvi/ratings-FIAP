import './App.css'
import Header from '../../Componentes/Header'
import Main from '../../Componentes/Main'
import Dropdown from '../../Componentes/Dropdwon'
import mais from "../../assets/svg/mais.svg"
import PostAvaliacao from '../../Componentes/PostAvaliacao/index';
import Footer from '../../Componentes/Footer'

function App() {
  return (
    <>
      <Header/>

      <Main
        titulo="GOD OF WAR: RAGNAROK"
        nota={9.6}/>
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
            <a href="#" className="vermelho avaliarButton">
            <img src={mais} alt="Mais Icon" />
            Avaliar
            </a>
          </div>
          <PostAvaliacao 
            notaUser={10}
            user="Ukiyo"
            data="13 de Agosto de 2024"
            tituloAvaliacao="What an incredible sequel!"
            textoAvaliacao={`A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles.
            <br /><br />
            I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful.`}
            like={33}
            dislike={11}
            />
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default App
