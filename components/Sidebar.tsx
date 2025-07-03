"use client"

import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <div className='sidebar'>
      <nav className='flex flex-col gap-4'>

        <Link href='/' className='mb-12 cursor-pointer flex items-center gap-2'>
          <Image
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt={'logo'}
            className='size-[24px] max-xl:size-14'
          />
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          // ✅ FIXED: precise matching by comparing first path segment
          const current = pathname.split('/')[1];
          const target = item.route.split('/')[1];
          const isActive = current === target;

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'sidebar-link flex items-center gap-2 rounded-lg px-3 py-2 transition-all',
                { 'bg-bank-gradient text-white': isActive }
              )}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

      </nav>
    </div>
  );
}

export default Sidebar;
