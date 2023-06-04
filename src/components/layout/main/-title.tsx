interface Str {
  data: String;
}

const Title = ({data}: Str) => {
  return (
    <>
      <div className='card-t items-center flex'>
        <div className='my-4 relative'>
          <h4 className='font-tt font-semibold text-xl t-c'>
            <span>{ data }</span>
          </h4>
        </div>
      </div>
    </>
  )
}

export default Title