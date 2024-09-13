import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const PHero = () => {
  return (
    <div className="flex-1 bg-[#161616] text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-10">
            Projects
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Explore our portfolio to see how we have successfully helped
            businesses like yours achieve their digital goals. Our projects
            showcase our expertise in web development, app development, UI/UX
            design, and more.{" "}
          </p>
        </header>

        <section>
        <h2 className="text-xl  sm:text-2xl font-semibold mb-4">Web Apps</h2>
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
            <ProductCard
              src="/real.png"
              title="Indoz Realtors"
              desc="Discover the perfect property with our real estate website, offering a seamless search experience and comprehensive listings. Powered by MySQL, Nextjs, Tailwindcss, and JavaScript for a secure, user-friendly, and visually engaging platform."
              link="https://indozrealtors.com.au/"
            />
            <ProductCard
              src="/noble.png"
              title="Noble Numbers"
              desc="Welcome to our Chartered Accountant's website, your destination for expert financial services and personalized guidance. With Next.js and Tailwind CSS, we've crafted a modern, responsive platform that ensures a smooth user experience."
              link="https://noblenumbers.com.au/"
            />
            <ProductCard
              src="/capitons.png"
              title="CAPITANOS"
              desc="Explore the revamped Capitanos Hotel website, featuring a range of studios with kitchenettes in Darwin CBD. Developed using Next.js and Tailwind CSS, our platform guarantees a user-friendly interface for effortless booking and showcasing the hotel's amenities."
              link="https://www.capitanos.com.au/"
            />
            <ProductCard
              src="/event.png"
              title="Evently"
              desc="Welcome to our event management website, designed to streamline the planning process and deliver exceptional experiences. Powered by Next.js and Tailwind CSS, Postgresql and Nodejs our platform offers a visually appealing"
              link="https://evently-mern-full.vercel.app/"
            />
            <ProductCard
              src="/travel.png"
              title="Hilink"
              desc="Discover a world of possibilities with our travel landing page, showcasing dream destinations and convenient trip planning tools. Powered by Next.js and Tailwind CSS, our website promises a visually stunning and user-friendly interface for travelers seeking unforgettable experiences."
              link="https://travel-steel-nu.vercel.app/"
            />
            <ProductCard
              src="/image.png"
              title="Imaginify"
              desc="Experience the power of AI with Imaginfy, where Cloudinary AI transforms image backgrounds and more seamlessly. Crafted with Next.js, Tailwind CSS, Node.js, and MongoDB, our landing page showcases the cutting-edge capabilities of AI technology in image editing and enhancement."
              link="https://imaginify-mauve.vercel.app/"
            />
            <ProductCard
              src="/dant3.png"
              title="Dante St James"
              desc="Unlock the potential within with Dante St. James, where hesitant business owners are empowered to lead with confidence in the market. Utilizing Next.js, Tailwind CSS, Node.js, and MongoDB, our landing page guides professionals on a transformative journey towards business success and leadership excellence."
              link="https://dantestjames.com/"
            />
            <ProductCard
              src="/doc.png"
              title="DocLink"
              desc="Discover the future of healthcare access with DocLink, a platform revolutionizing medical resource delivery for professionals and employers. Built with Next.js, Tailwind CSS, Node.js, and MongoDB, our landing page showcases an innovative and seamless solution for stakeholders in the healthcare industry"
              link="https://www.doclink.tech/"
            />
            <ProductCard
              src="/simpl.png"
              title="Simpl Doctor"
              desc="Experience architectural innovation with Études, where creativity meets functionality to redefine excellence. Developed using Next.js, Tailwind CSS, Node.js, and MongoDB, our landing page showcases cutting-edge architectural solutions in a visually captivating and interactive manner"
              link="https://simpldoctor.com/"
            />
            <ProductCard
              src="/ks.png"
              title="KS Content Creators"
              desc="Explore our digital marketing landing page, designed to showcase innovative strategies and services for online success. Crafted with Next.js, Tailwind CSS, Node.js, and MongoDB, our platform ensures a secure, responsive, and visually engaging experience for visitors seeking marketing solutions"
              link="https://kscontentcreators.com/"
            />
            <ProductCard
              src="/my.png"
              title="My Pets Friend"
              desc="Join our vibrant social media community dedicated to celebrating beloved pets through shared photos and heartwarming stories. Utilizing Next.js, Tailwind CSS, Node.js, and MongoDB, our platform provides a secure and visually captivating space for pet enthusiasts to connect and engage."
              link="https://www.mypetsfriend.ca/"
            />
            <ProductCard
              src="/raa.png"
              title="Raazain"
              desc="Welcome to our innovative ecommerce platform, where you can enjoy a seamless shopping experience and explore a diverse range of products. Powered by Next.js, Tailwind CSS, Node.js, and MongoDB, our website promises a secure, responsive, and feature-rich interface, ensuring a convenient and visually appealing online shopping journey."
              link="https://raazain.com/"
            />
            <ProductCard
              src="/admin.png"
              title="Admin Dashboard"
              desc="Manage your online store effortlessly with our admin ecommerce website, facilitating smooth product and order management. Developed with Next.js, Tailwind CSS, Node.js, and MongoDB, our platform ensures a robust, responsive, and user-friendly interface for streamlined ecommerce operations."
              link="https://raazain-admin.vercel.app/"
            />
          </div>

          <h2 className="text-xl  sm:text-2xl font-semibold my-4">Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <ProductCard
              src="/wall.jpeg"
              title="Delicious Restro Cafe Wall Design"
              link=""
            />
            <ProductCard
              src="/logo.jpeg"
              title="Delicious Restro Cafe Logo"
              link=""
            />
            <ProductCard
              src="/coming soon design.jpeg"
              title="Coming soon design"
              link=""
            />
            <ProductCard
              src="/badge.jpeg"
              title="Badge Design"
              link=""
            />
            <ProductCard
              src="/badge2.jpeg"
              title="Badge Design"
              link=""
            />
            </div>
        </section>
      </div>
    </div>
  );
};

export default PHero;
