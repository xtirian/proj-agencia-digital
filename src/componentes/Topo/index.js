import React from "react"
import './style.css'

const Topo = () => {
    return (
    <header>
        <img src="/assets/logoM.png" alt="logo" className="logo" />
        <div>
          <button id="tema-btn" className="tema-claro"
          //   onClick={MudarTema}
          >
            <img src="/assets/moon.png" alt="btn-tema" className="btn-img" />
          </button>
        </div>
      </header>
      )
}

export default Topo;