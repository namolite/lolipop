import React from "react"
import Link from "next/link"

import { ITitleMap } from "@/utils/interfaces"

interface ContactProps {
  data: ITitleMap[]
}

interface ContactItemProps {
  title: string;
  content: string;
  assets?: string;
}


const ContactItem: React.FC<ContactItemProps> = ({ title, content, assets }) => {
  return (
    <div className="mt-3 mb-6 ml-6 flex items-center relative">
      <div className="award t-t mr-4 flex min-w-35p">
        <span className="font-pop font-bold">{title}</span>
      </div>
      {assets && (
        <Link href={assets} className="ts-text">
          <span className="font-pop text-sm relative cursor-pointer ts-fast">{content}</span>
        </Link>
      )}
    </div>
  )
}

const Contact: React.FC<ContactProps> = ({ data }) => (
  <div className='ml-4 w-full grid grid-cols-3'>
    <div>{
      data?.map((dataListItem) => (
        <div key={dataListItem.id}>
          <ContactItem
            title={dataListItem.title}
            content={dataListItem.content}
            assets={dataListItem.assets}
          />
        </div>
      ))
    }</div>
  </div>
)

export default Contact