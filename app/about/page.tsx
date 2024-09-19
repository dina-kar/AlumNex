import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Introducing our Innovative Product
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our product is designed to revolutionize the way you approach your daily tasks. With cutting-edge
                    features and a user-friendly interface, it's the perfect tool to streamline your workflow and boost
                    your productivity.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Give Feedback
                  </Link>
                </div>
              </div>
              <img
                src="https://www.univariety.com/blog/wp-content/uploads/2021/11/28466-min.jpg"
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Streamline Your Workflow</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our product is designed to help you work smarter, not harder. With a range of powerful features,
                  you'll be able to tackle your tasks more efficiently than ever before.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Automation</h3>
                  <p className="text-muted-foreground">Streamline your workflow with our advanced automation tools.</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Collaboration</h3>
                  <p className="text-muted-foreground">Seamlessly collaborate with your team and stay connected.</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Insights</h3>
                  <p className="text-muted-foreground">Gain valuable insights to make informed decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About the Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Brilliant Minds Behind It</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experts is dedicated to creating innovative solutions that empower our users. Get to know
                  the individuals who are driving the development of our product.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Team Member"
                    className="rounded-full"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-muted-foreground">Co-Founder, CEO</p>
                    <p className="text-muted-foreground">
                      John is the visionary behind our product, with a passion for creating innovative solutions that
                      transform the way people work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img
                    src="/placeholder.svg"
                    width="64"
                    height="64"
                    alt="Team Member"
                    className="rounded-full"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-muted-foreground">Lead Developer</p>
                    <p className="text-muted-foreground">
                      Jane is the technical mastermind behind our product, with a keen eye for detail and a commitment
                      to delivering high-quality code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our product? Check out our FAQ section to find the answers you're looking for.
                </p>
              </div>
              <div className="grid gap-4">
                <Collapsible className="grid gap-4">
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    What are the key features of your product?
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-4 py-3 text-muted-foreground">
                      Our product offers a range of powerful features, including automation tools, seamless
                      collaboration capabilities, and advanced analytics to help you work smarter and more efficiently.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="grid gap-4">
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    How much does your product cost?
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-4 py-3 text-muted-foreground">
                      Our product is available in a range of pricing tiers to suit the needs of businesses of all sizes.
                      Please visit our pricing page for more information.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible className="grid gap-4">
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    How can I get started with your product?
                    <ChevronRightIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-4 py-3 text-muted-foreground">
                      Getting started with our product is easy. Simply sign up for a free trial and our team will guide
                      you through the setup process. If you have any questions, don't hesitate to reach out to our
                      support team.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </section>
        <section id="feedback" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Feedback</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let Us Know What You Think</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We value your feedback and are always looking for ways to improve our product. Please take a moment to
                  share your thoughts and suggestions.
                </p>
              </div>
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Report an issue</CardTitle>
                  <CardDescription>What area are you having problems with?</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="area">Area</Label>
                      <Select defaultValue="product">
                        <SelectTrigger id="area">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product">Product</SelectItem>
                          <SelectItem value="documentation">Documentation</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="security-level">Severity</Label>
                      <Select defaultValue="2">
                        <SelectTrigger id="security-level" className="line-clamp-1 truncate">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                          <SelectItem value="2">Severity 2</SelectItem>
                          <SelectItem value="3">Severity 3</SelectItem>
                          <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="I need help with..." />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Please include all information relevant to your issue." />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button variant="ghost">Cancel</Button>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
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

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}