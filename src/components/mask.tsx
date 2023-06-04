import { CSSTransition } from "react-transition-group"
import { useState } from "react"

const Mask = ({ title, isActive }: any) => {
  return(
    <CSSTransition in={isActive} timeout={0} classNames="fade">
      <div
        className="mask w-full h-full fixed top-0 left-0 ts-slow"
        //style={{display: 'none'}}
      ></div>
    </CSSTransition>
  )
}

export default Mask