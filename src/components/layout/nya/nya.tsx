import { useState } from "react"


const Nav = ({ props }: any) => {
  interface props {
    name: String,
    url: String
  }
  return (
    <>
      {props.map((data: { name: string, url: string }) => (
        <li key={data.name} className="nav-item ts-slow w-full ts-text">
          <a href={data.url} className="px-10 py-3 inline-block w-full ts-fast ts-text">{data.name}</a>
        </li>
      ))}
    </>
  )
}

const Nya = ({ title, isActive, nyaActive }: any) => {
  const [active, setActive] = useState(false)

  const nav = require('../../../data/list/nav.json')

  const openMenu = () => {
    // TODO(done) fetch elements
    let element: any = document.querySelector('.nyan')
    let menu: any = document.querySelector('.catto'), m: any = document.querySelector('.catto-m')
    let nav: any = document.querySelector('.nya-nav')
    let mask: any = document.querySelector('.mask')
    nyaActive()
    // TODO(done) animations
    for (let i = 0; i < 3; i++) {
      element.childNodes[i].classList.toggle(`meow-${i}-ani`)
    }
    menu.classList.toggle('catto-ani')
    m.classList.toggle('catto-m-ani')
    if(active) {
      setTimeout(() => {
        mask.classList.toggle('fade-exit-done')
      }, 650)
    }
    // maskFad(active)
    // mask.classList.toggle('mask-active')
    for (let i = 0; i < nav.childNodes.length; i++) {
      nav.childNodes[i].classList.toggle('nav-item-active')
    }
    setActive(!active)
  }

  return (
    <div className="minus-em absolute right-0 w-20">
      <div className="catto minus-em fixed top-auto bottom-auto right-auto w-20 bg-gray-800">
        <div className="relative">
          <div className="top-0 left-0 absolute w-full h-20 flex items-center bg-gray-700 z-10 shadow-lg">
            <a className="nyan block p-8 opacity-100" onClick={openMenu}>
              <span className="meow meow-0 relative"></span>
              <span className="meow relative"></span>
              <span className="meow meow-2 relative"></span>
            </a>
          </div>
          <div className="minus-em w-full">
            <nav className="relative flex items-center h-full">
              <ul className="nya-nav w-full pointer-events-auto t-s font-pop t-90p tracking-widest">
                <Nav props={nav} />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nya
