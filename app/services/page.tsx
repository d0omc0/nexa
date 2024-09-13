import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-[#161616] text-white flex-1 flex-col">
      <div className="max-w-4xl mx-auto md:p-8 lg:p-12 p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Services
        </h1>
        <p className="text-muted-foreground text-sm md:text-base mb-6">
          At Nexadevs.pro, we pride ourselves on delivering top-notch design and
          development services tailored to meet your unique needs. Our
          experienced team of developers is committed to providing innovative
          solutions across various domains, ensuring your projects are executed
          with precision and creativity.
        </p>

        <h2 className="text-xl  sm:text-2xl font-semibold mb-4">
          Web Development
        </h2>

        <div className="space-y-6">
          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">Frontend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <span className="text-md md:text-lg text-white">
                  Technologies
                </span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>Reactjs, Nextjs, Vue.js</li>
                </ul>
                <span className="text-md md:text-lg text-white ">Features</span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>Best responsive design</li>
                  <li>Fully customizable design</li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                Our frontend development services focus on creating visually
                appealing and user-friendly websites that adapt seamlessly
                across devices, ensuring an optimal user experience.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">Backend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <span className="text-md md:text-lg text-white">
                  Technologies
                </span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>Node.js, Nest.js, Python</li>
                </ul>
                <span className="text-md md:text-lg text-white ">Features</span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>SEO optimization</li>
                  <li>High efficiency and performance</li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                We build robust backend systems that power your applications,
                ensuring they are fast, secure, and scalable. Our solutions are
                designed to enhance your online visibility through effective SEO
                practices.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">
                  Content Management Systems (CMS)
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <span className="text-md md:text-lg text-white">Platforms</span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li> Shopify, kordPress, Headless CMS, Kustom Solutions</li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                Our CMS services allow you to manage your content effortlessly.
                Whether you need a fully customized solution or a simple setup,
                we have you covered.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">
                  {" "}
                  Mobile App Development
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <span className="text-md md:text-lg text-white">
                  Technologies
                </span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>React Native, Kotlin</li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                Our mobile app development services are designed to create
                engaging and high-performance applications for both Android and
                iOS platforms, ensuring a smooth user experience.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">
                  Software Development
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                We offer tailored software solutions that cater to your business
                needs, enhancing productivity and operational efficiency.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">
                  {" "}
                  Mobile App Development
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <span className="text-md md:text-lg text-white">
                  Technologies
                </span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>React Native, Kotlin</li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                Our mobile app development services are designed to create
                engaging and high-performance applications for both Android and
                iOS platforms, ensuring a smooth user experience.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">
                  UI/UX Design
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <span className="text-md md:text-lg text-white">Tools</span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>Figma, Framer, Adobe XD</li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                Our design team focuses on creating intuitive and engaging user
                interfaces that enhance user experience. We prioritize
                user-centered design principles to ensure that your applications
                are not only functional but also enjoyable to use.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">
                  Artificial Intelligence Solutions
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <span className="text-md md:text-lg text-white">Tools</span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>
                    Groq, Meta Llama, OpenAI, TensorFlow, Python, Tableau, Power
                    BI
                  </li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                We leverage cutting-edge AI technologies to provide solutions
                that enhance decision-making, automate processes, and drive
                innovation in your business.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">
                  Print Design
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                Our print design services ensure that your marketing materials
                stand out, delivering your message effectively in the physical
                world.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1C1C1C] border-zinc-800">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-xl md:text-2xl text-white">
                  Database Solutions
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <span className="text-md md:text-lg text-white">Tools</span>
                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1 ">
                  <li>MySQL, MongoDB, Supabase, PostgreSQL, Astra</li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-300 mt-4 text-muted-foreground">
                We provide comprehensive database solutions that ensure your
                data is secure, accessible, and efficiently managed.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Link href={"/contact"}>
                <Button className=" text-white  w-full sm:w-auto">
                  Get started now
                </Button>
              </Link>
              <Button className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto ">
                <MailIcon className="mr-2 h-4 w-4" /> E-Mail
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
