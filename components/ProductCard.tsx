import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  src: string;
  title: string;
  desc?: string;
  link: string;
}

const ProductCard = ({ src, title, desc, link }: ProductProps) => {
  return (
    <Link href={link}>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="px-0 py-1">
          <Image
            alt="Billify product"
            className="w-full h-60 object-cover"
            src={src}
            width={500}
            height={500}
          />
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 space-y-2 sm:space-y-0">
          <div>
            <h3 className="text-md font-semibold text-white">{title}</h3>
            <p className="text-muted-foreground text-sm min-w-xl">{desc}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
