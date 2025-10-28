import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="" className="text-white text-2xl xl:text-3xl font-bold flex items-center uppercase">
      <Image src="/assets/logo-yellow.png" alt="Logo" width={40} height={48} />
      <span className="font-light ml-2">profi</span>
      <span className="text-accent">machining</span>
    </Link>
  );
};

export default Logo;
