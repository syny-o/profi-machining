import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="" className="text-white text-2xl font-bold"> 
        <Image src="/assets/logo.png" alt="Logo" width={230} height={150} />
    </Link>
  );
}

export default Logo;