import facebook from "../assets/icon-facebook.svg"
import pinterest from "../assets/icon-pinterest.svg"
import twitter from "../assets/icon-twitter.svg"
import style from "./popover.module.css"
import { useRef, useState, useLayoutEffect, useEffect } from "react"
function Popover ({direction, button}){
    //definira la direccion del padre article, por lo que decidira donde se colocara y como dependiendo si row o column
    const directionParent = getComputedStyle(direction).flexDirection
    const popoverRef = useRef(null)
    const [position, setPosition] = useState({top:0, left:0})
    //definira las coordenadas del button que llama al popover 
    const positionButton = button.getBoundingClientRect();
    const coordsButton ={
        top: positionButton.top,
        left: positionButton.left,
        right : positionButton.right
    }
    const styleDivPopoverPosition ={
        //separaremos la flecha del boton 16px
        top: `${coordsButton.top - 32}px`,
        //centraremos la felcha usando del left del boton y sumandole 8 (le sumamos la mitad del boton y le restamos el ancho de la flecha0)
        left: `${coordsButton.left  + 8}px`
    }
    useLayoutEffect(()=>{
        if(directionParent !== "row"){
            return
        }
        const positionPopover = popoverRef.current.getBoundingClientRect() 
        //centraremos el popover a la derecha (de forma ideal si es que no sobresale del viewport)
        //ojo despues de usar getBoundingClientRect() right es la distancia del lado izquierdo de viewport hasta el lado derecho del objeto,
        //diferente de ccs que right es la distancia del lado derecho al borde derecho del viewport SI! perdi mucho tiempo en darme cuenta 
        let idealLeft= positionButton.left + positionButton.width/2 - positionPopover.width/2
        console.log(positionPopover.width, positionPopover.height);
        let left = Math.max(16, idealLeft )
        let top = (positionButton.top - 32) - positionPopover.height + 8
        setPosition({left, top})
        console.log(top);
    }, [])
return(<>
{/*no te olvides jamas de los px SI! tambien me demore mucho en darme cuenta */ }
    <div ref={popoverRef} className={`${style[directionParent]} ${style.popover}`} style={directionParent === "row" ? {top: `${position.top}px`, left: `${position.left}px`} : {}}>
        <p className="text-preset-3 grey-400">SHARE</p>
        <div className={style.divImage}>
            <img src={facebook} alt="facebook icon" />
            <img src={twitter} alt="twitter icon"/>
            <img src={pinterest} alt="pinterest icon"/>
        </div>
    </div>
        {directionParent === "row" && <div className={style.divPopover} style={styleDivPopoverPosition}></div>}
    </>)
}
export default Popover