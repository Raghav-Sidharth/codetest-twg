import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="w-screen bg-[#052133] ">
        <div className="bg-[#052133] flex ">
          <div className="bg-[url('/Layers.svg')] bg-cover w-full max-h-[2000px] ">
            {/* <Image src={'/Layers.svg'} alt={''} width="1000" height="1000" /> */}
          </div>

          <div>
            <div className="font-norwester text-white text-6xl pt-[750px] pr-[100px]">
              <h2 className="uppercase">
                Welcome to the World of WASSP Multibeam
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
