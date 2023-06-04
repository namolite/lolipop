

interface Data {
  data: Props
}

interface Props {
  'amount': String,
  'variety': String
}

const Award = ({ data }: Data) => {
  return (
    <div className="award w-auto">
      <div className="mb-8 ml-6 flex items-center relative">
        <div className="award t-c mr-4 flex">
          <span className="font-tt font-bold text-2xl">{data.amount}</span>
        </div>
        <span className="font-tt text-sm relative">{data.variety}</span>
      </div>
    </div>
  )
}

export default Award