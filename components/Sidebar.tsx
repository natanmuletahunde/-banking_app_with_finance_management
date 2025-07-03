"use client"
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
const Sidebar = ({user}:SiderbarProps) => {
    const pathname = usePathname();
  return (
    <div className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className='
            mb-12 cursor-pointer flex items-center gap-2'>
                <Image 
                      src='/icons/logo.svg'
                      width={34}
                      height={34} 
                      alt={'logo'}
                      className='size-[24px]
                      max-xl:size-14'/>
                      <h1 className='sidebar-logo'>Horizon</h1>
            </Link>
            {sidebarLinks.map((item)=>{
                const  isActive =  pathname === item.route || pathname.startsWith(`${item.route}`)
                  return (
                    <Link
                    href={item.route}
                    key={item.label}
                    className={cn(
                      'sidebar-links flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200',
                      {
                        'bg-bank-gradient text-white shadow-md': isActive,
                        'hover:bg-gray-100': !isActive,
                      }
                    )}
                  >
                    <div className='relative size-6 flex-shrink-0'>
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        fill
                        className={cn('object-contain', {
                          'brightness-[3] invert-0': isActive,
                        })}
                      />
                    </div>
                    <span className='text-sm font-medium'>{item.label}</span>
                  </Link>
                  
                  )
            })}
        </nav>
    </div>
  )
}

export default Sidebar 