import Image from 'next/image'
import Grid from '@mui/material/Grid'

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center p-5">
        <div>
          <Image
            src="./assets/Logo.svg"
            alt="Wassp Logo"
            width="150"
            height="150"
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex px-2">
          <li className="px-2">SEARCH</li>
          <li className="px-2">LOGIN</li>
          <li className="px-2 flex">
            EN{' '}
            <Image
              className="p-1"
              src="./assets/ArrowDown.svg"
              alt="Menu"
              width="25"
              height="25"
            />
          </li>
          <li className="px-2">
            <Image src="./assets/Menu.svg" alt="Menu" width="25" height="25" />
          </li>
        </ul>
      </div>
    </>
  )
}
