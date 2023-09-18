import Image from 'next/image'
import Grid from '@mui/material/Grid'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <div className="flex justify-between items-center h-[80px] p-5">
        <div>
          <Image src="/Logo.svg" alt="Wassp Logo" width="150" height="150" />
        </div>
        {/* Menu */}
        <ul className="hidden md:flex px-2 text-white font-norwester">
          <li className="px-4">SEARCH</li>
          <li className="px-4">LOGIN</li>
          <li className="px-4 flex">
            EN
            <Image
              className="p-1"
              src="/ArrowDown.svg"
              alt="Menu"
              width="25"
              height="25"
            />
          </li>
          <li className="px-2">
            <Image src="/Menu.svg" alt="Menu" width="25" height="25" />
          </li>
        </ul>
      </div>
    </div>
  )
}
