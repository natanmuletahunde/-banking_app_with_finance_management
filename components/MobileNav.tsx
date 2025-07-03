"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[240px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent  side="left" className="border-none bg-white">
          <Link
            href="/"
            className="
            mb-12 cursor-pointer flex items-center gap-2"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt={"logo"}
              className="size-[24px]
                      max-xl:size-14"
            />
          
          </Link>
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}`);
            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  "sidebar-links flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200",
                  {
                    "bg-bank-gradient text-white shadow-md": isActive,
                    "hover:bg-gray-100": !isActive,
                  }
                )}
              >
                <div className="relative size-6 flex-shrink-0">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn("object-contain", {
                      "brightness-[3] invert-0": isActive,
                    })}
                  />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
