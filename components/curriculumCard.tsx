import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export default function FeatureCard({
  title,
  description,
  image,
}: FeatureCardProps) {
  return (
    <Card className="w-90 h-auto border-white/10 bg-white/5 backdrop-blur-sm py-4">
      <div className="flex justify-center items-center h-10 w-12 rounded-md bg-green-300/10 ml-4">
        <Image
          src={image}
          alt={"image"}
          width="20"
          height="20"
        />
      </div> 

      <CardHeader>
        <CardTitle className="font-satoshi text-lg text-black font-bold">
          {title}
        </CardTitle>

        <CardDescription className="font-inter text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}