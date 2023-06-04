import Link from "next/link";
import Image from "next/image";


const Work = ({ props }: any) => {
  interface props {
    time: String,
    title: String,
    detail: String,
    img: String,
    url: String
  }
  return (
    <div className='w-80 mr-6 h-full relative flex-shrink-0 overflow-visible ts-15 z-10'>
      <Link href={props.url} className='relative'>
        <Image src={props.img} alt=" " width={'320'} height={'320'} className='h-80 w-full object-cover object-center' />
      </Link>
      <div className='h-48 p-6 relative bottom-0 bg-gray-700'>
        <Link href={props.url} className='pb-4 t-t t-15p block font-lato'>
          <h5 className=''>{props.title}</h5>
        </Link>
        <p className='t-m text-sm'>{props.detail}</p>
      </div>
    </div>
  )
}

export default Work
