"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const newClassName = isActive ? `${className} active` : className;

  return (
    <Link href={href} className={newClassName} {...props}>
      {children}
    </Link>
  );
}
