import { useState } from 'react'
import 'tailwindcss/tailwind.css'

import Meta from '@/components/meta'
import Award from '@/components/layout/main/-award'
import Card from '@/components/layout/main/-card'
import Title from '@/components/layout/main/-title'
import Work from '@/components/layout/main/-work'

const Skill = ({ props }: any) => {
  interface props {
    title: String,
    content: String
  }
  return (
    <div className='mx-4 my-6'>
      <h5 className='t-t font-tt pb-1.5'>
        <span>{props.title}</span>
      </h5>
      <div className='t-m font-lato t-90p'>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

const Contact = ({ title, content }: any) => {
  return (
    <div className="mb-1.5 ml-6 flex items-center relative">
      <div className="award t-t mr-4 flex min-w-35p">
        <span className="font-pop font-bold">{title}</span>
      </div>
      <span className="font-pop text-sm relative">{content}</span>
    </div>
  )
}

const Home = () => {

  const award = require('../data/award.json')
  const skill = require('../data/skill.json')
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
            <div className='banner w-full h-96 bg-cover bg-center mb-8'>
              <div className='flex p-16 w-full'>
                <div className='w-full items-center'>
                  <h1 className='text-5xl font-tt pb-36 text-gray-50'>
                    <span>life is much simpler with</span>
                  </h1>
                  <h1 className='text-8xl font-tt text-gray-100'>
                    <span>JavaScript</span>
                  </h1>
                </div>
              </div>
            </div>
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
                  <div>
                    <div className='flex'>
                      <div className='ml-4 ts-fast'>
                        <img src="" />
                      </div>
                      <div className='ml-4 ts-fast'>
                        <img src="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <Title data={`🐾 Contact`} />
            <div className='ml-4 w-full grid grid-cols-3'>
              <div>
                <Contact title={'E-mail'} content= {'littlemaid@duck.com'} />
                <Contact title={''} content= {'namo.hyrb@gmail.com'} />
                <div className='h-4'></div>
                <Contact title={'Telegram'} content= {'https://t.me/unlimited_echo_bot'} />
                <div className='h-4'></div>
                <Contact title={'Linkedin'} content= {'https://www.linkedin.com/in/namolite'} />
              </div>
            </div>
          </Card>
          <Card>
            <Title data={'💕 About Me'} />
            <div className='w-full grid t-m'>
              <div className='mx-8 my-3 text-sm font-pop'>
                <p className='mb-3'>Hello there! I&apos;m an enthusiastic undergraduate student who is majoring in Computer Science. I have a passion for a wide range of interests, including literature, technology, cooking, petting, lo-fi hip-hop, and playing all sorts of sports.</p>
                <p className='mb-3'>I&apos;m always eager to learn and grow, especially interested in coding with grace and style. I work hard to achieve my goals and am constantly seeking new challenges.</p>
                <p className='mb-12'>Oh, and I have to confess - I&apos;m a huge fan of Arch Linux and simply can&apos;t resist anything cute! Thanks for taking the time to read my profile. That&apos;s it, nya.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home