import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface ScheduleCardProps {
  title: string;
  description: string;
  week: string;
  image: string | StaticImageData;
  highlighted?: boolean;
  topics: string[];
}


export default function ScheduleCard({title, description, week, image, highlighted = false, topics}: ScheduleCardProps) {
    return(
        <Card className={`md:w-105 w-92 h-auto backdrop-blur-sm pb-4 pt-0 transition-all duration-300 ${
            highlighted
            ? "bg-cyan-950 text-white"
            : "bg-white border-white/10"
        }`}>
            <div className="relative h-80">
                <Image src={image} alt="title" fill priority className="object-cover"/>
                <div className="absolute inset-0 bg-black/50"/>

                <div className="relative z-10 flex justify-center items-center rounded-full w-30 py-2 mt-4 ml-4 bg-white/10">
                    <p className="md:text-sm text-xs text-white text-center font-inter font-medium">{week}</p>
                </div>
            </div>

            <CardHeader>
                <CardTitle className={`font-satoshi text-xl font-bold ${highlighted ? "text-white" : "text-black"}`}>
                    {title}
                </CardTitle>

                <CardDescription className={`font-inter ${highlighted ? "text-gray-500" : "text-gray-400"}`}>
                    {description}
                </CardDescription>
            </CardHeader>

            <div className="px-6 mt-2">
                <ul className="space-y-3">
                    {topics.map((topic, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-3"
                    >
                        <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                            highlighted
                            ? "bg-cyan-800"
                            : "bg-green-100"
                        }`}
                        >
                        <Check
                            size={14}
                            className={
                            highlighted
                                ? "text-cyan-300"
                                : "text-green-600"
                            }
                        />
                        </div>

                        <span
                        className={`text-sm font-inter ${
                            highlighted
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                        >
                        {topic}
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
        </Card>
    )
}