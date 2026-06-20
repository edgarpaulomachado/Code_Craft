import { LucideIcon } from "lucide-react";

interface CourseInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export default function CourseInfoItem({
  icon: Icon,
  label,
  value,
}: CourseInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
        <Icon size={22} className="text-green-500" />
      </div>

      <div>
        <p className="font-inter text-sm text-gray-500">
          {label}
        </p>

        <h3 className="font-satoshi text-base font-semibold text-black">
          {value}
        </h3>
      </div>
    </div>
  );
}