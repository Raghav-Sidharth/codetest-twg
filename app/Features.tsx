'use client'
import React, { useState } from 'react'
import content from '../public/data.json'

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
          <div className="flex flex-row flex-wrap mb-10 ">
            {content.map((data) => (
              <div
                key={data.id}
                onClick={() => setSelectId(data.id)}
                className={`cursor-pointer p-2 rounded-full border-2 pb-1 mb-5 mr-3 ${
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
