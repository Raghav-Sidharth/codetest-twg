import Image from 'next/image'

export default function About() {
  return (
    <div className="relative bg-[#052133] w-screen h-screen">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-image z-0"></div>

      {/* Text overlay */}
      <div className="relative h-full">
        <div className="flex flex-wrap lg:pt-[450px] lg:pl-[450px] lg:pr-[450px] lg:ml-[200px] lg:mr-[200px] pt-16 pl-8 pr-8">
          <h2 className="text-white text-3xl pb-10 lg:text-6xl uppercase font-norwester">
            Welcome to the World of WASSP Multibeam
          </h2>
          <div className="flex pt-10 lg:pt-0 font-norwester">
            <div className="pr-4 lg:pr-10">
              <p className="text-white">01</p>
            </div>
            <div className="pr-4 lg:pr-10">
              <p className="text-white">ABOUT WASSP</p>
            </div>
            <div className="font-haas text-sm lg:text-xl mr-4 lg:mr-[250px] ml-4 lg:ml-20">
              <p className="text-white">
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
