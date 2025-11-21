"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({
  href,
  children,
  className,
  handleClick,
  ...props
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  handleClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const newClassName = isActive ? `${className} active` : className;

  return (
    <>
      {handleClick ? (
        <button className={newClassName} onClick={handleClick} {...props}>
          {children}
        </button>
      ) : (
        <Link href={href} className={newClassName} {...props}>
          {children}
        </Link>
      )}
    </>
  );
}
