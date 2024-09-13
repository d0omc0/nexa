import Footer from "@/components/Footer";
import ThoughtSection from "@/components/ThoughtSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <>
      <div className="bg-[#161616] text-white   flex-1 flex-col">
        <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Us
          </h1>

          <p className="text-muted-foreground text-sm md:text-base mb-8 ">
            At Nexadevs.pro, we are a team of passionate developers and
            designers dedicated to delivering exceptional digital solutions.
            With years of experience in the industry, we understand the
            intricacies of technology and design, allowing us to craft solutions
            that not only meet but exceed our clients&apos; expectations.
          </p>

          <div className="mb-8">
            <Image
              width={600}
              height={400}
              src="/N2.png"
              alt="Jackson Carter smiling"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 text-sm md:text-base">
            <p className="text-muted-foreground">
              Our mission is to empower businesses through innovative technology
              and design, ensuring they stay ahead in an ever-evolving digital
              landscape. We believe in collaboration, transparency, and
              continuous improvement, working closely with our clients to
              achieve their goals.
            </p>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <Card className="bg-[#1C1C1C] mb-4 border-zinc-700 mx-10">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Stack</h3>
                <p className="text-sm text-zinc-400">
                  Software and resources I use on a regular basis.
                </p>
              </div>
              <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-3  gap-4">
                <StackItem
                  icon="/nextjs.svg"
                  name="Nextjs"
                  description="React Framework"
                />
                <StackItem
                  icon="/framer.svg"
                  name="Framer"
                  description="Web Design Platform"
                />
                <StackItem
                  icon="/tailwind.svg"
                  name="tailwindcss"
                  description="CSS Framework"
                />
                <StackItem
                  icon="/figma.svg"
                  name="Figma"
                  description="Design Tool"
                />
                <StackItem
                  icon="/arc_browser.svg"
                  name="Arc"
                  description="Browser"
                />
                <StackItem
                  icon="/typescript.svg"
                  name="Typescript"
                  description="Typesafe Framework"
                />
                <StackItem
                  icon="/supabase.svg"
                  name="Supabase"
                  description="Database"
                />
                <StackItem
                  icon="/post.svg"
                  name="Postgresql"
                  description="Database"
                />
              </div>
            </CardContent>
            <CardFooter className="bg-[#1C1C1C] border-t border-zinc-700 p-4 rounded-2xl ">
              <Link href={"/stack"} className="w-full">
                <Button className="w-full text-white ">View all</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}

function StackItem({
  icon,
  name,
  description,
}: {
  icon: string;
  name: string;
  description: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      <Image
        width={10}
        height={10}
        src={icon}
        alt={name}
        className="w-10 h-10 rounded-md"
      />
      <div>
        <h4 className="font-medium text-white">{name}</h4>
        <p className="text-xs text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
