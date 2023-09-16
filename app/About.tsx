import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="w-screen bg-[#052133]">
        <div className="bg-[#052133] grid grid-cols-2">
          <div className="bg-center bg-cover w-full h-[2000px] bg-image"></div>

          <div>
            <div className="font-norwester text-white max-w-[800px] max-h-[950px] pt-[750px] ">
              <h2 className="uppercase text-6xl max-w-[675px] max-h-[120px] ">
                Welcome to the World of WASSP Multibeam
              </h2>
              <div className="flex flex-cols-3 flex-wrap pt-10 ">
                <div className="max-w-[150px] max-h-[100px] pr-[100px]">
                  <p>01</p>
                </div>
                <div className="max-w-[400px] max-h-[100px] pr-[110px]">
                  <p> ABOUT WASSP</p>
                </div>
                <div className="max-w-[350px] max-h-[126px] font-haas">
                  <p className="text-[16px]">
                    WASSP, a powerful multi-beam sounder with 120-degree
                    coverage and models for deep exploration, offers
                    unparalleled accuracy, detail, and versatility. Target fish
                    with steerable sounders, generate real-time 3D charts, map
                    fish in water, and make better decisions with the
                    user-friendly advanced mode.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
