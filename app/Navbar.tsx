import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4">
        <div>
          <div>
            <Image
              src="./assets/Logo.svg"
              alt="Wassp Logo"
              width="64"
              height="64"
            />
          </div>
          {/* Menu */}
          <ul className="hidden md:flex">
            <li>SEARCH</li>
            <li>LOGIN</li>
            <li>EN</li>
          </ul>
        </div>
      </div>
    </>
  )
}
