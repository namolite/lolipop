import TextBlock from '@/components/text/textBlock'
import LineBlock from '@/components/text/lineBlock'

const Skill = ({ props }: any) => {
  interface props {
    title: String,
    content: String
  }

  return (
    <div className='mx-4 my-6'>
      <h5 className='t-t font-tt t-15p pb-1.5'>
        <span>
          <LineBlock data={props.title} />
        </span>
      </h5>
      <div className='t-m font-lato t-90p'>
        <TextBlock data={props.content} />
      </div>
    </div>
  )
}

export default Skill