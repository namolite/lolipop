import { useState } from 'react'
import 'tailwindcss/tailwind.css'

import Meta from '@/components/meta'

import Banner from '@/components/main/banner/banner'
import Award from '@/components/layout/main/-award'
import Card from '@/components/layout/main/-card'
import Title from '@/components/layout/main/-title'
import Work from '@/components/layout/main/-work'

import Skill from '@/components/text/skill'
import Contact from '@/components/main/contact'
import Introduction from '@/components/main/about'


const Home = () => {

  const award = require('../data/list/award.json')
  const skill = require('../data/text/skill.json')
  const works = require('../data/works.json')

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

  return (
    <>
      <Meta pageTitle='greetings.' />
      <div className='catto-m h-auto w-screen pl-72 pr-20 text-gray-400 overflow-hidden'>
        <div className='h-auto overflow-visible'>
          <Card>
            <Banner />
          </Card>
          <Card>
            <div className='fence w-full flex relative'>
              <div className='w-full h-36 mr-4 absolute border-4 border-gray-600'></div>
            </div>
            <div className='ml-4 w-full grid grid-cols-4'>
              {award.map((data: { id: number, amount: string, variety: string }) => (
                <div key={data.variety}>
                  <Award data={{ 'amount': data.amount, 'variety': data.variety }} />
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Title data={'🍀 What I Do'} />
            <div className='w-full grid grid-cols-2 grid-rows-2 t-m'>
              {skill.map((data: { title: string, content: string }) => (
                <div key={data.title}>
                  <Skill props={data} />
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Title data={'📅 Recent Activities'} />
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
              {/* TODO(done) slider nav */}
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
          </Card>
          <Card>
            <Title data={`🐾 Contact`} />
            <Contact />
          </Card>
          <Card>
            <Title data={'💕 About Me'} />
            <Introduction />
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home