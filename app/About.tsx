import Image from 'next/image'

export default function About() {
  return (
    <div className="relative bg-[#052133] w-screen h-screen">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-[1000px] h-full  bg-cover bg-image z-0"></div>

      {/* Text overlay */}
      <div className="relative h-full">
        <div className="flex flex-cols flex-wrap pt-[500px] pl-[500px] pr-[500px] ml-[200px] mr-[200px]">
          <h2 className="text-white text-6xl uppercase font-norwester">
            Welcome to the World of WASSP Multibeam
          </h2>
          <div className="flex flex-cols-2 pt-10 font-norwester">
            <div className="pr-10">
              <p className="text-white">01</p>
            </div>
            <div className="pr-10">
              <p className="text-white">ABOUT WASSP</p>
            </div>
            <div className="font-haas text-2xl">
              <p className="text-white text-sm">
                WASSP, a powerful multi-beam sounder with 120-degree coverage
                and models for deep exploration, offers unparalleled accuracy,
                detail, and versatility. Target fish with steerable sounders,
                generate real-time 3D charts, map fish in water, and make better
                decisions with the user-friendly advanced mode.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
