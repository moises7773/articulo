import "./desygnSystem.css"
import mesa from "./assets/drawers.jpg"
import avatar from "./assets/avatar-michelle.jpg"
import style from "./App.module.css"
import icon from "./assets/icon-share.svg"
import { useState } from "react"
import { useRef } from "react"
import Popover from "./popover/popover.jsx"
function App(){
  const [isOpen, setOpen] = useState(false);
  const parentPopover = useRef("column");
  const ButtonPopover = useRef (null)
  return(<>
  <article ref={parentPopover} className={style.article}>
    <figure className={style.figure}>
      <img src={mesa} alt="comoda verde decorada con un florero" />
    </figure>
    <header className={style.header}>
      <div>
        <h1 className="text-preset-1 grey-900">
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </h1>
        <p className="text-preset-2 grey-500">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
        </p>
      </div>
      <footer className={style.footer}>
        <img src={avatar} alt="" />
        <address>
          <p className="text-preset-2 grey-900">Michelle Appleton</p>
          <time dateTime="28-06-2020" className="text-preset-2 grey-400">28 jun 2020</time>
        </address>
          <button onClick={function(){ setOpen(isOpen ? false: true)}} ref={ButtonPopover}>
            <img src={icon} alt="compartir"  className={style.share}/>
          </button>
          {isOpen && <Popover direction= {parentPopover.current} button={ButtonPopover.current}></Popover>}
      </footer>
    </header>
  </article>
  </>)
}

export default App