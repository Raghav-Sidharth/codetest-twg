'use client'
import React, { useState } from 'react'

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
      <div className="bg-[#04192B] features-comp w-screen h-screen flex pt-[200px]">
        {/* Left column for Features section */}

        <div className="flex flex-wrap space-x-10 font-norwester uppercase text-white w-1/3 items-start p-4">
          <div>
            <p>03</p>
          </div>
          <div className="ml-11 pl-11">
            <p>Features</p>
          </div>
        </div>

        {/* Right column for Buttons and Data section */}
        <div className="flex flex-col text-white w-2/3 items-start p-4 font-haas">
          {/* Buttons row */}
          <div className="flex flex-row flex-wrap space-x-4 mb-10">
            {content.map((data) => (
              <div
                key={data.id}
                onClick={() => setSelectId(data.id)}
                className={`cursor-pointer p-2 rounded-full border-2  ${
                  selectId === data.id
                    ? 'bg-white text-[#04192b]'
                    : 'border-white text-white'
                }`}
              >
                <div className="flex flex-wrap px-3 py-1">
                  <p className="font-norwester pr-3">{data.id}</p>{' '}
                  <p>{data.title}</p>
                </div>
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
                      <div className="text-4xl">
                        <p>{data.id}</p>
                      </div>
                      <div className="text-6xl mt-11 pt-11">
                        <p>{data.title}</p>
                      </div>
                    </div>
                    <div className="text-2xl pt-10">
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
