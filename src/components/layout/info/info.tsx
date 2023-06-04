import Avatar from "./-avatar"
import Tech from "./-tech"
import Social from "./-social"

const Info = () => {
  return (
    <div className="pl-4 pr-4 minus-em w-72 bg-gray-800 mb-4 fixed z-50 shadow-xl">
      <div className="pl-4 pr-4">
        <Avatar />
        <Tech />
        <Social />
      </div>
    </div>
  )
}


export default Info

