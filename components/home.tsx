import Link from "next/link"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Connected with Alumni Connect</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join our vibrant alumni community and unlock a world of opportunities. Update your profile, connect with
              peers, and contribute to your alma mater.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Join Now
              </Link>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Connect with Your Peers</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore job opportunities, access the alumni directory, and network with fellow graduates.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join the Network
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Alumni Directory
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Inspiring Alumni Stories</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how our alumni have made a lasting impact in their communities and beyond.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col gap-4">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="64"
                  height="64"
                  alt="Alumni"
                  className="rounded-full"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-muted-foreground">CEO, Acme Inc.</p>
                <p className="text-sm text-muted-foreground">
                  John is a successful entrepreneur who founded Acme Inc. after graduating from our college. He is a
                  strong supporter of the alumni association and mentors current students.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col gap-4">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="64"
                  height="64"
                  alt="Alumni"
                  className="rounded-full"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">Professor, University of XYZ</p>
                <p className="text-sm text-muted-foreground">
                  Jane is a respected professor who has made significant contributions to her field. She is actively
                  involved in the alumni association and frequently speaks at campus events.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col gap-4">
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  width="64"
                  height="64"
                  alt="Alumni"
                  className="rounded-full"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-bold">Michael Johnson</h3>
                <p className="text-muted-foreground">Founder, Startup XYZ</p>
                <p className="text-sm text-muted-foreground">
                  Michael is a successful entrepreneur who founded a thriving startup after graduating from our college.
                  He is a mentor to current students and an active member of the alumni association.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Alumni Connect. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
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
