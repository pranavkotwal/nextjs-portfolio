'use client'
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { 
   name: 'Home',
   href: '/',

  },
  { 
    name: 'Blog',
    href: '/blog',

  },
  { 
    name: 'Projects',
    href: '/#projects',

  },
];

export default function NavLinks(){
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex md:h-[30px] md:mt-0 mt-2 gap-2 h-[40px] text-white justify-center ' ,
              {'border-b-4 border-indigo-500 text-pink-200 ':pathname===link.href},
            )}
          >
            <div className="flex px-8">
                <p className="md:block ">{link.name}</p>

            </div>
          </Link>
        );
      })}
    </>
  );
}