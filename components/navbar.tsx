'use client'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">Logo</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link href="/" className="text-white hover:bg-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Home</Link>
              <Link href="/directory" className="text-white hover:bg-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Alumni Directory</Link>
              <Link href="/stories" className="text-white hover:bg-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Success Stories</Link>
              <Link href="/jobs" className="text-white hover:bg-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Job Search</Link>
              <Link href="/about" className="text-white hover:bg-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">About</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition duration-150 ease-in-out">
              Sign Up
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-purple-700">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="text-white hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="text-white hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/services" className="text-white hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/contact" className="text-white hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-purple-800">
            <Link href="https://alum-nex.vercel.app/api/auth/callback/github">
            <button className="w-full bg-white text-purple-600 px-4 py-2 rounded-md text-base font-medium hover:bg-opacity-90 transition duration-150 ease-in-out" >
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}