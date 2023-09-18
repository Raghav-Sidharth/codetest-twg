import Image from 'next/image'

export default function LandingPage() {
  return (
    <>
      <div className="landing-gradient h-screen text-white font-norwester flex items-center">
        <div className="p-4 md:p-8 lg:p-16">
          {/* Existing content */}
          <div className="pb-2 md:pb-4 lg:pb-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">SEA IT ALL</h1>
          </div>
          <div className="text-4xl md:text-5xl lg:text-7xl">
            <p className="pt-2">MULTIBEAM SONAR </p>
            <p className="pt-2">PRODUCTS & SOLUTIONS.</p>
          </div>

          {/* New content */}
          <div className="flex flex-cols-2">
            <div className="pt-4 md:pt-8 lg:pt-16 ml-[500px] mr-[1200px] lg:mt-[200px] font-haas">
              <p className="text-lg md:text-xl lg:text-2xl">
                WASSP multi-beam enables sustainable fishing, exploration, and
                surveys with versatility and detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
