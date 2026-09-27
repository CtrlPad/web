import { cn } from "@/lib/utils";

interface Props {
  className?: string
}

export default function Bubble({ className }: Props) {
  return (
    <div className={cn("absolute rounded-full blur-3xl animate-pulse [animation-duration:5s]", className)} />
  );
}
