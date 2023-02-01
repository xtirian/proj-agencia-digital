import './style.css'


const Topo = (props) => {

    const Lua = '/assets/moon.png';
    const Sol = '/assets/sun.png';

    return (
    <header className={props.temaAtual ? "tema-escuro" : "tema-claro"}>
        <img src="/assets/logoM.png" alt="logo" className="logo" />
        <div>
          <button id="tema-btn" className={props.temaAtual ? "tema-escuro" : "tema-claro"}
            onClick={props.MudarTema}
          >
            <img src={props.temaAtual ? Sol : Lua} alt="btn-tema" className="btn-img" />
          </button>
        </div>
      </header>
      )
}

export default Topo;