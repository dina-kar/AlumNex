
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
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
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Alumni Connect
          </Link>
        </nav>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <Card className="w-full max-w-4xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Alumni Connect
              </div>
              <CardTitle className="text-2xl">Connect with Alumni</CardTitle>
            </div>
            <CardDescription>Engage with alumni and students to build meaningful connections.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="search">Search</Label>
                <Input id="search" placeholder="Search for alumni or students" />
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Alumni</div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="w-16 h-16 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">Class of 2015</div>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="w-16 h-16 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Jane Smith</div>
                    <div className="text-xs text-muted-foreground">Class of 2018</div>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="w-16 h-16 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Michael Johnson</div>
                    <div className="text-xs text-muted-foreground">Class of 2020</div>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="w-16 h-16 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Emily Davis</div>
                    <div className="text-xs text-muted-foreground">Class of 2022</div>
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Students</div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="w-16 h-16 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Sarah Lee</div>
                    <div className="text-xs text-muted-foreground">Class of 2024</div>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="w-16 h-16 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">David Kim</div>
                    <div className="text-xs text-muted-foreground">Class of 2025</div>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="w-16 h-16 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Olivia Chen</div>
                    <div className="text-xs text-muted-foreground">Class of 2026</div>
                  </Link>
                  <Link
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 rounded-md hover:bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="w-16 h-16 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Alex Nguyen</div>
                    <div className="text-xs text-muted-foreground">Class of 2027</div>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <Card className="w-full max-w-4xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Chat</div>
              <CardTitle className="text-2xl">Connect with Alumni and Students</CardTitle>
            </div>
            <CardDescription>Chat with alumni and students to build meaningful connections.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-[300px_1fr] max-w-4xl w-full rounded-lg overflow-hidden border">
              <div className="bg-muted/20 p-3 border-r">
                <div className="flex items-center justify-between space-x-4">
                  <div className="font-medium text-sm">Alumni and Students</div>
                  <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
                    <PenIcon className="h-4 w-4" />
                    <span className="sr-only">New message</span>
                  </Button>
                </div>
                <div className="py-4">
                  <form>
                    <Input placeholder="Search" className="h-8" />
                  </form>
                </div>
                <div className="grid gap-2">
                  <Link
                    href="#"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50 bg-muted"
                    prefetch={false}
                  >
                    <Avatar className="border w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs text-muted-foreground">Hey, how's it going? &middot; 2h</p>
                    </div>
                  </Link>
                  <Link href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                    <Avatar className="border w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <p className="text-sm font-medium leading-none">Jane Doe</p>
                      <p className="text-xs text-muted-foreground">Just finished a great project! 📚 &middot; 45m</p>
                    </div>
                  </Link>
                  <Link href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                    <Avatar className="border w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <p className="text-sm font-medium leading-none">Michael Smith</p>
                      <p className="text-xs text-muted-foreground">Excited for the weekend! &middot; 1h</p>
                    </div>
                  </Link>
                  <Link href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                    <Avatar className="border w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                      <AvatarFallback>ED</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <p className="text-sm font-medium leading-none">Emily Davis</p>
                      <p className="text-xs text-muted-foreground">Who's up for a study session? &middot; 3h</p>
                    </div>
                  </Link>
                  <Link href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50" prefetch={false}>
                    <Avatar className="border w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <p className="text-sm font-medium leading-none">Sarah Lee</p>
                      <p className="text-xs text-muted-foreground">Morning coffee is the best! ☕ &middot; 30m</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <div className="p-3 flex border-b items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="border w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <p className="text-sm font-medium leading-none">Jane Doe</p>
                      <p className="text-xs text-muted-foreground">Active 2h ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-auto">
                    <Button variant="ghost" size="icon">
                      <span className="sr-only">Call</span>
                      <PhoneIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <span className="sr-only">Video call</span>
                      <VideoIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4 p-3">
                  <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                    Hey, how's it going? We should catch up sometime soon. 🙏
                  </div>
                  <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm bg-muted">
                    Sure! I'm free this weekend if you want to grab a coffee.
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
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


function PenIcon(props: any) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}


function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function VideoIcon(props: any) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}