import Link from "next/link"

export default function Navbar () {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" className="absolute top-2 left-2 w-2 h-2"   prefetch={false}>
          <MountainIcon className="h-12 w-12" />
          <span className="bg-gradient-to-b font-extrabold">AlumNex</span>
        </Link>
          <Link href="http://localhost:3000/api/auth/signin/github" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Sign In
            </div>
          </Link>
          <Link href="/directory" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Alumni Directory
            </div>
          </Link>
          <Link href="/stories" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Success Stories
            </div>
          </Link>
          <Link href="/jobs" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Job Search
            </div>
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            About
          </div>
          </Link>
        </nav>
      </header>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}