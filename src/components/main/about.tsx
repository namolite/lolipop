import TextBlock from "@/components/text/textBlock"

/**
 * 
 *  Personal introduction at the bottom of page...
 * 
 */

const aboutData = require('../../data/text/about.json')

const Introduction = () => (
  <div className='w-full grid t-m'>
    <div className='mx-8 my-3 t-90p font-pop'>
      <div className="mb-9">{
        aboutData.map((data: { id: string, content: string }) =>
          <div className="mb-3" key={data.id}>
            <TextBlock data={data.content} />
          </div>
        )
      }</div>
    </div>
  </div>
)

export default Introduction