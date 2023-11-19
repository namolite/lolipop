import LineBlock from '@/components/text/lineBlock'

import { IText } from "@/utils/interfaces"

/**
 * 
 *  Rich text block display...
 * 
 */

const TextBlock = (data: IText | null) => (
  <div className="text-block">{
    data?.data.split('\n')?.map((line) => (
      <div key={line}>
        <LineBlock data={line} />
      </div>
    ))
  }</div>
)


export default TextBlock