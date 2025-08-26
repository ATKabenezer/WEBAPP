'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href='/' className="flex items-center gap-2 font-bold text-xl">
          <Image src="/logo.png" alt="ATL Logo" width={40} height={40} />
          ATL Technology
        </Link>
        <nav className="space-x-6">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
