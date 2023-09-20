'use client'
import React, { useState, useEffect } from 'react'

const content = [
  {
    id: '01',
    title: 'test title 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '02',
    title: 'test title 2 ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '03',
    title: 'test title 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export default function Features() {
  const [selectId, setSelectId] = useState('01')

  return (
    <>
      <div className="pt-[120px] w-screen bg-[#04192B]"></div>
      <div className="bg-[#04192B] w-screen h-screen flex">
        {/* Left column for Features section */}
        <div className="flex flex-wrap space-x-10 font-norwester uppercase text-white w-1/3 items-start p-4">
          <div>
            <p>03</p>
          </div>
          <div className="ml-10 pl-10">
            <p>Features</p>
          </div>
        </div>

        {/* Right column for Buttons and Data section */}
        <div className="flex flex-col text-white w-2/3 items-start p-4">
          {/* Buttons row */}
          <div className="flex flex-row flex-wrap space-x-4 mb-4">
            {content.map((data) => (
              <div
                key={data.id}
                onClick={() => setSelectId(data.id)}
                className="cursor-pointer"
              >
                {data.title}
              </div>
            ))}
          </div>
          {/* Rendered Data */}
          <div>
            {content.map((data) => {
              if (data.id === selectId) {
                return (
                  <>
                    <div>
                      <p>{data.id}</p>
                    </div>
                    <div>
                      <p>{data.title}</p>
                    </div>
                    <div>
                      <p>{data.text}</p>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}
