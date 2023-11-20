import { useState } from 'react'
import 'tailwindcss/tailwind.css'

import Meta from '@/components/meta'

import Banner from '@/components/main/banner/banner'
import Award from '@/components/layout/main/-award'
import Card from '@/components/layout/main/-card'
import Title from '@/components/layout/main/-title'
import Work from '@/components/layout/main/-work'

import Skill from '@/components/text/skill'
import HorizontalSlides from '@/components/main/works/works'
import Contact from '@/components/main/contact'
import Introduction from '@/components/main/about'


const Home = () => {

  const award = require('../data/list/award.json')
  const skill = require('../data/text/skill.json')
  // const works = require('../data/works.json')

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
            <HorizontalSlides />
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