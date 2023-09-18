export default function Fseries() {
  return (
    <>
      <div className="fishes-gradient h-screen flex flex-col justify-end items-start p-4">
        {/* Line and numbers wrapper */}
        <div className="flex items-center">
          {/* Number 01 */}
          <span className="text-lg text-white">01</span>

          {/* Line */}
          <div className="flex-grow h-[1px] bg-white mx-2"></div>

          {/* Number 03 */}
          <span className="text-lg text-white">03</span>
        </div>

        {/* Text below the line */}
        <div className="text-white font-norwester uppercase text-8xl pt-2">
          <p className="text-lg">
            {'('}Fishing Series{')'}
          </p>
          <p>F - Series</p>
        </div>
      </div>
    </>
  )
}
