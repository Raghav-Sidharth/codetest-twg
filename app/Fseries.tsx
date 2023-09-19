export default function Fseries() {
  return (
    <>
      <div className="fishes-gradient h-screen flex flex-col justify-end items-start p-4">
        <div className="flex justify-between items-end w-full">
          <div className="text-white pt-2">
            <div className="flex justify-between w-full font-norwester">
              <span className="text-lg text-white pr-5">01</span>
              <div className="h-[1px] w-full bg-white mt-3"></div>

              <span className="text-lg text-white pl-5">03</span>
            </div>
            <p className="text-lg font-norwester uppercase">
              {'('}Fishing Series{')'}
            </p>
            <p className="font-norwester uppercase text-8xl">F - Series</p>
          </div>
          <div className="m-10"></div>
          <div className="text-white pt-2  3 font-haas p-10">
            <p className="pb-5 uppercase">F-Series</p>
            <span className="text-xl">
              WASSP Multibeam finds fish and habitat over a wider area than
              single-beam systems.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
