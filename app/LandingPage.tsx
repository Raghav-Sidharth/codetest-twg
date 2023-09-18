import Image from 'next/image'

export default function LandingPage() {
  return (
    <>
      <div className="landing-gradient h-screen text-white font-norwester flex items-center">
        <div className="p-4 md:p-8 lg:p-16">
          <div className="pb-4 md:pb-8 lg:pb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">SEA IT ALL</h1>
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl">
            <p className="pt-2">MULTIBEAM SONAR </p>
            <p className="pt-2">PRODUCTS & SOLUTIONS.</p>
          </div>
        </div>
      </div>
    </>
  )
}
