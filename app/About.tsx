import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="w-full bg-[#052133]  ">
        <div className="bg-[#052133] ">
          <Image src={'/Layers.svg'} alt={''} width="1000" height="1000" />
        </div>
      </div>
    </>
  )
}
