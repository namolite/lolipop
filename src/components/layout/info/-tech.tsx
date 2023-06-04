

const Summary = ({ props }: any) => {
  interface Props {
    item: String,
    info: String
  }
  return (
    <li className="flex justify-between">
      <h5 className="t-c">{props.item}</h5>
      <span className="t-m">{props.info}</span>
    </li>
  )
}

const List = ({ props }: any) => {
  return (
    <>
      {props.map((data: { name: string, url: string }) => (
        <li key={data.name}>{data.name}</li>
      ))}
    </>
  )
}


const Tech = () => {
  const stack = require('../../../data/stack.json')
  return (
    <div className="minus-em pt-60 pb-12">
      <div className="py-6">
        <ul className="font-pop font-thin text-sm leading-6">
          <Summary props={{ 'item': 'Region:', 'info': 'Chekiang' }} />
          <Summary props={{ 'item': 'Country:', 'info': 'China' }} />
          <Summary props={{ 'item': 'Age:', 'info': '20' }} />
        </ul>
      </div>
      <div className="w-full h-px bg-gray-100 opacity-20"></div>
      <div className="py-6">
        <div className="font-pop font-thin text-sm leading-5">
          <h5 className="font-tt font-bold t-15p t-c pb-2">Tech Stack</h5>
          <div className="flex t-m justify-between">
            <ul>
              <List props={stack[0]} />
            </ul>
            <ul className="text-right">
              <List props={stack[1]} />
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-100 opacity-20"></div>
      <div className="py-4 t-s font-tt font-bold ts-fast ts-text">
        <a href="./resume.pdf" download={'resume'} className="ts-fast ts-text">Download CV</a>
      </div>
    </div>
  )
}


export default Tech

