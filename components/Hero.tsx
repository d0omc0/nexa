import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import Link from "next/link";
import EmailButton from "./EmailButton";

export default function Component() {
  return (
    <div className="flex-1 bg-[#161616] text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-10">
            Craft. Code. Design. Grow.
            <br />
            Elevate Your Brand&apos;s{" "}
            <span className="text-primary">Digital Presence</span>.
          </h1>
          <p className="text-muted-foreground text-base  sm:text-md ">
            At NexaDevs, we believe that every business deserves a digital
            presence that reflects its unique identity and resonates with its
            target audience. Our team of skilled designers and developers
            collaborates closely with you to understand your vision and bring it
            to life.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link href="/about">
              <Button
                variant="secondary"
                className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
              >
                About
              </Button>
            </Link>
            <EmailButton
              emailAddress="mailto:support@nexadevs.pro"
              subject="Inquiry about nexa"
              body={`Dear Nexa Support Team,

                I hope this email finds you well. I recently came across your services and I'm interested in learning more about how Nexa can help my business.
                
                Specifically, I'd like to inquire about:
                1. The range of services you offer
                2. Your pricing structure
                3. Typical timelines for project completion
                4. Any case studies or success stories you can share
                
                I'm looking forward to hearing back from you and potentially discussing how we can work together.
                
                Thank you for your time and assistance.
                
                Best regards, `}
            />
          </div>
        </header>

        <section>
          <h2 className="text-xl  sm:text-2xl font-semibold mb-4">New Drops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <ProductCard
              src="/decafe.png"
              title="Delicious Restro Cafe"
              desc="Explore our café's website, where you can immerse yourself in the cozy ambience and discover our delightful menu. Built using Nextjs, typescript, shadcn-ui and the tailwindcss framework for a responsive and visually captivating user experience."
              link="https://www.deliciousrestro.com/"
            />
            <ProductCard
              src="/prismic.png"
              title="Glisten Ai"
              desc="Experience the future with our AI landing page showcasing cutting-edge technology and innovative solutions. Developed using Prismic, Nextjs, Tailwindcss, Framer-motion, and Typescript for a dynamic and informative user interface."
              link="https://prismic-rho.vercel.app/"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
