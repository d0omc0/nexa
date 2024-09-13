import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Grid, Bell, Calendar, Compass, Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Feature() {
  return (
    <div className="bg-[#161616] text-white p-4 sm:p-6 md:p-8 ">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-[#1C1C1C] border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-muted-foreground text-white p-2 rounded-md">
                    <Grid className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Projects
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Dive into my quick Projects
                    </p>
                  </div>
                </div>
                <Link href={"/projects"}>
                  <Button className="w-full text-white">View Projects</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-[#1C1C1C] border-zinc-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-muted-foreground text-white p-2 rounded-md">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Design Services
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Explore my range of design services.
                    </p>
                  </div>
                </div>
                <Link href={"/services"}>
                  <Button className="w-full text-white">View Services</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-[#1C1C1C] border-zinc-700">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Stack</h3>
                <p className="text-sm text-zinc-400">
                  Software and resources I use on a regular basis.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
            <CardFooter className="bg-[#1C1C1C] border-t border-zinc-700 p-4 rounded-2xl">
              <Link href={"/stack"} className="w-full">
                <Button className="w-full text-white ">View all</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
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
        width={40}
        height={40}
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
