import { useState } from 'react'

import Work from '@/components/layout/main/-work'

/**
 * 
 *  Show my works...
 * 
 */

export default function HorizontalSlides({ data }: any) {
  const [prevPhase, setPhase] = useState(0)

  const swithSwiper = (element: number) => {
    return () => {
      let e = document.querySelector('.swiper'), p = `sw-${element}`, pp = `sw-${prevPhase}`
      let sw: any = document.querySelector('.switch')?.childNodes
      sw[prevPhase].classList.remove('swiper-active')
      sw[element].classList.add('swiper-active')
      e?.classList.replace(pp, p)
      setPhase(element)
    }
  }

  const works = require('../../../data/works.json')

  return (
    <div className='w-full max-w-full flex-ro t-m relative'>
      <div className='overflow-visible mx-auto relative z-0 list-none'>
        <div className='swiper sw-0 w-full h-full relative flex ts-1 box-content'>
          {works.map((data: { time: string, title: string, detail: string, img: string, url: string }) => (
            <div key={data.title}>
              <Work props={data} />
            </div>
          ))}
        </div>
      </div>
      {/* TODO(done) slider */}
      <div className='w-full max-w-full relative'>
        <div className='flex justify-betwee pt-2 h-8'>
          <div>
            <div className='switch absolute text-center z-10'>
              <span className='ts-fast swiper-active mr-3 h-1.5 w-3 bg-gray-500 rounded-full inline-block cursor-pointer' onClick={swithSwiper(0)}></span>
              <span className='ts-fast mr-3 h-1.5 w-3 bg-gray-500 rounded-full inline-block cursor-pointer' onClick={swithSwiper(1)}></span>
              <span className='ts-fast mr-3 h-1.5 w-3 bg-gray-500 rounded-full inline-block cursor-pointer' onClick={swithSwiper(2)}></span>
              <span className='ts-fast mr-3 h-1.5 w-3 bg-gray-500 rounded-full inline-block cursor-pointer' onClick={swithSwiper(3)}></span>
              <span className='ts-fast mr-3 h-1.5 w-3 bg-gray-500 rounded-full inline-block cursor-pointer' onClick={swithSwiper(4)}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
