import React from 'react';
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#043873] tracking-normal text-white py-3 px-6 flex justify-between items-center pl-36 pr-36 ">
      <div className="flex space-x-2"><Image className='text-7xl' src="/Logo.png" alt="Logo" width={138} height={160} /> {/* Logo Image */}</div>
      <ul className="flex space-x-6">
        <li className='text-xs py-2'>Products</li>
        <li className='text-xs py-2'>Solutions</li>
        <li className='text-xs py-2'>Resources</li>
        <li className='text-xs py-2 pr-28'>Pricing</li>
        <li>
          <button className="text-xs bg-secondary text-black px-7 py-3  rounded">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
