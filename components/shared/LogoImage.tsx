import Image from "next/image";
import Link from "next/link";

export default function LogoImage() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logos/logo-maximus-nutrition.png"
        alt="Maximus Nutrition Logo"
        width={250}
        height={140}
        priority
      />
    </Link>
  );
}
