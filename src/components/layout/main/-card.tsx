const Card = (props: any) => {
  return (
    <>
      <div className='h-auto py-6'>
        <div className='flex mx-auto relative mb-8'>
          <div className='w-full'>
            <div className='mx-4 flex flex-wrap px-4 relative overflow-visible'>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card