import Link from "next/link"

import { ITitleMap } from "@/utils/interfaces"


const ContactItem = ({ title, content }: ITitleMap) => {
  return (
    <div className="mb-1.5 ml-6 flex items-center relative">
      <div className="award t-t mr-4 flex min-w-35p">
        <span className="font-pop font-bold">{title}</span>
      </div>
      <Link href={content}>
        <span className="font-pop text-sm relative">{content}</span>
      </Link>
    </div>
  )
}


const Contact = () => (
  <div className='ml-4 w-full grid grid-cols-3'>
    <div>
      <ContactItem title={'E-mail'} content={'littlemaid@duck.com'} />
      <div className='h-4'></div>
      <ContactItem title={'Telegram'} content={'https://t.me/unlimited_echo_bot'} />
      <div className='h-4'></div>
      <ContactItem title={'Linkedin'} content={'https://www.linkedin.com/in/namolite'} />
    </div>
  </div>
)

export default Contact