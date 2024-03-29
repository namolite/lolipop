import Image from "next/image"

const Avatar = () => {
  return(
    <>
      <div className="layout-bg-light absolute left-0 top-0 text-center z-110 p-8 h-60 w-full shadow-xl">
        <div>
          <div className="w-24 h-24 my-0 mx-auto relative mb-4">
            <a className="w-full h-full flex items-center justify-center">
              <img alt="" src={'/avatar.png'} height={96} width={96} className="w-full h-full absolute object-cover rounded-full" />
            </a>
          </div>
          <h5 className="font-tt t-c font-bold text-lg ts-fast ts-text">
            <a className="ts-fast ts-text">Lynx Syu</a>
          </h5>
          <div className="t-m font-pop t-80p pt-1.5">
            <p>Full-stack Developer</p>
            <p>UI / UX Designer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatar

