export default function Fseries() {
  return (
    <>
      <div className="fishes-gradient h-screen flex flex-col justify-end items-start p-4">
        <div className="flex justify-between items-end w-full">
          <div className="text-white pt-2">
            <div className="flex justify-between w-full font-norwester">
              <span className="text-lg text-white pr-5">01</span>
              <div className="h-[1px] w-full bg-white"></div>

              <span className="text-lg text-white pl-5">03</span>
            </div>
            <p className="text-lg font-norwester uppercase">
              {'('}Fishing Series{')'}
            </p>
            <p className="font-norwester uppercase text-8xl">F - Series</p>
          </div>
          <div className="text-white pt-2 mr-[100px] ml-[1000px] mb-[25px] font-haas">
            <p className="pb-5 uppercase">F-Series</p>
            <p className="">WASSP Multibeam finds fish and habitat over a</p>
            <p>wider area than single-beam systems.</p>
          </div>
        </div>
      </div>
    </>
  )
}
