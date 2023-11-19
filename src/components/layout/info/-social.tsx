import Lk from "./-social-link"

const Media = ({ props }: any) => {
  interface props {
    id: String,
    url: String,
    assets: String
  }
  return (
    <>
      {props.map((data: { id: string, url: string, assets: string }) => (
        <a key={data.id} href={data.url} className="mx-2 cursor-pointer ts-fast ts-img">
          <img src={data.assets} alt={data.id} className="invert ts-fast opacity-50 h-5" />
        </a>
      ))}
    </>
  )
}

const Social = () => {

  const data = require('../../../data/list/social.json')

  return (
    <div className="flex absolute h-14 w-full left-0 bottom-0 bg-gray-700 items-center justify-center z-110">
      <Media props={data} />
    </div>
  )
}

export default Social
