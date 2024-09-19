import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"
import Image from "next/image"
export default async function Component() {
  const posts = await prisma.stories.findMany();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <Card className="w-full max-w-4xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Success Stories</CardTitle>
            <CardDescription>Explore the inspiring stories of our alumni and their achievements.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
            {posts.map((post) => (<div key={post.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Image src="/placeholder.svg" width={400} height={300} alt="Success Story className="rounded-lg object-cover/>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-medium">{post.title}</div>
                  <div>
                   {post.content}
                  </div>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>))}
              </div>
          </CardContent>
        </Card>
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

