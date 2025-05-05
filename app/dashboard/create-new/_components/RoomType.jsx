import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function RoomType({ selectedRoomType }) {
  return (
    <div className='rounded-3xl felx items-center justify-between '>
      <label className='text-white border-white'>Select Your Room Type</label>
      <Select onValueChange={(value) => selectedRoomType(value)}>
        <SelectTrigger className="w-[500px] mt-5 flex items center justify-between rounded-3xl h-10 border-4 weight-2 text-white ">
          <SelectValue placeholder="Room Type" />
            <span className="rounded-3xl  font-mono ring-1outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-2 py-2 rotate-[45deg] ml-2 shadow-lg focus:shadow-lg ">
                    
                        <path fill="#CA2C31" d="m3.77 71.73l16.34-16.1l27.82-4.93l-2.75 14.56L7.57 76.82l-2.43-1.05z"></path>
                        <path fill="#A02422" d="M22.94 59.76L5.2 75.88l13.05 6.36l19.81-10.11v-4.77l4.05-10.92zm41.98 28.39l-8.57 3.72l-8.09 17.15s7.12 15.77 7.44 15.77c.32 0 4.37.32 4.37.32l14.4-16.1l3.64-27.5l-13.19 6.64z"></path>
                        <path fill="#CA2C31" d="M56.5 100.84s4.77-.97 8.17-2.59c3.4-1.62 7.6-4.04 7.6-4.04l-1.54 13.43l-15.05 17.13s-.59-.73-3.09-6.17c-1.99-4.34-2.68-5.89-2.68-5.89l6.59-11.87z"></path>
                
                </span>
        </SelectTrigger>
        <SelectContent className="max-h-40 overflow-y-auto border-2   rounded-3xl rounded-3xl felx items-center justify-between  "> 
          {[
            "Living Room",
            "Bed Room",
            "Kitchen",
            "Dining Room",
            "Study/Office",
            "Bathroom"
          
          ].map((room) => (
            <SelectItem 
              key={room} 
              value={room} 
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white flex justify-center text-center"
            >
              {room}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default RoomType