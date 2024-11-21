import React from "react";
// when import, difference between using {} and not using {} is that
//  when using { }, you are importing a named export
import { cn } from "@/lib/utils";
function EmptyList({
  heading = "no items found.",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
}

export default EmptyList;
