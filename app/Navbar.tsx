import Image from 'next/image'
import Grid from '@mui/material/Grid'

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 ">
        <div>
          <Image
            src="./assets/Logo.svg"
            alt="Wassp Logo"
            width="100"
            height="100"
          />
        </div>
        {/* Menu */}
        <ul className="hidden md:flex py-2">
          <li className="px-2">SEARCH</li>
          <li className="px-2">LOGIN</li>
          <li className="px-2">EN</li>
        </ul>
      </div>
    </>
  )
}
