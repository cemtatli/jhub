import React from 'react'
import { Logo } from '../ui/logo'
import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="mx-auto w-full  max-w-screen-xl border-t p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Logo />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Resources
            </h2>
            <ul className="flex flex-col gap-4 font-medium">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/jobs" className="hover:underline">
                Jobs Search
              </Link>
              <Link href="cv" className="hover:underline">
                Create CV
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
            <ul className="font-medium">
              <li className="mb-4">
                <Link href="https://github.com/cemtatli" className="hover:underline ">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/iltatmec" className="hover:underline">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
            <ul className="font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            Jhub
          </Link>
          . All Rights Reserved.
        </span>
        <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
          <Link href="#" className=" hover:text-gray-900">
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16">
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span className="sr-only">Discord community</span>
          </Link>
          <Link href="#" className=" hover:text-gray-900">
            <Twitter size={16} fill="currentColor" />
            <span className="sr-only">Twitter page</span>
          </Link>
          <Link href="#" className="">
            <Github size={16} fill="currentColor" />
            <span className="sr-only">GitHub account</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
