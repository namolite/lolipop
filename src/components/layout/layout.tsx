import { Fragment, useState } from "react";
import Info from "@/components/layout/info/info";
import Mask from "@/components/mask";
import Nya from '@/components/layout/nya/nya';
import { Analytics } from '@vercel/analytics/react'

const Layout = (props: any) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Fragment>
      <main className="tart bg-black font-mono">
        <div className="puff p-4 h-auto w-auto overflow-visible relative">
          <div className="clear h-auto ml-auto mr-auto overflow-visible overflow-x-hidden relative shadow-md">
            <div className="bg-gray-900 relative flex flex-nowrap shadow-lg">
              <Info />
              {props.children}
              <Mask isActive={isActive} />
              <Nya
                isActive={isActive}
                nyaActive={() => {
                  setIsActive(!isActive)
                  console.log(isActive)}
                }
              />
            </div>
          </div>
        </div>
      </main>
      <Analytics />
    </Fragment>
  )
}

export default Layout