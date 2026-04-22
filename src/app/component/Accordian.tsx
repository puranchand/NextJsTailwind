import { useState } from 'react'

const listAccordian:any = [
    {
      title: "Lorem ipsum dolor sit amet",
      description: "",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "",
    },
  ]
 
export default function Accordian() {

  const [activeAcoordian, setActiveAcoordian] = useState(1)
 
  return (
    <div>
      <div className="px-9 w-full font-mono container mx-auto mt-8 mb-12	">
        {listAccordian.map((item:any, index:any) => {
          return (
            <div className="items-center justify-between text-sm lg:flex py-2	">
            <legend className="font-black uppercase 	">{item.title + " " + index}</legend>
            <div>-</div>
          </div>
          )
        })}
      
        {/* <div className="items-center justify-between text-sm lg:flex py-2	">
          <legend className="font-black uppercase 	"> Lorem ipsum dolor sit amet</legend>
          <div>-</div>
        </div>
        <div className="items-center justify-between text-sm lg:flex py-2	">
          <legend className="font-black uppercase 	"> Lorem ipsum dolor sit amet</legend>
          <div>-</div>
        </div>
        <div className="items-center justify-between text-sm lg:flex py-2	">
          <legend className="font-black uppercase 	"> Lorem ipsum dolor sit amet</legend>
          <div>-</div>
        </div> */}
      </div>  
    </div>
  )
}