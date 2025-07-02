import Link from 'next/link'
import Image from 'next/image'
const Sidebar = ({user}:SiderbarProps) => {
  return (
    <div className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className='
            mb-12 cursor-pointer itms-center gap-2'>
                <Image 
                      src='/icons/logo.svg'
                      width={34}
                      height={34} alt={''}/>
            </Link>
        </nav>
    </div>
  )
}

export default Sidebar 