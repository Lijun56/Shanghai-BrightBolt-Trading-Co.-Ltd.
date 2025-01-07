import Link from "next/link";
import { Button } from "../ui/button";
import { LuArmchair } from "react-icons/lu";
import { FaCogs } from "react-icons/fa";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaCogs className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
