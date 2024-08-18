'use client';
import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import ZemingoLogo from '@/app/ui/zemingo-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Locales from '@/app/dashboard/locales';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="w-full mb-2 h-20 flex flex-col items-start justify-between rounded-md bg-yellow-500 p-4 md:h-40">
          <Locales/>
        <div className="w-32 text-white md:w-40">
            <Link href="/">
                <ZemingoLogo size='sm' />
            </Link>
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-yellow-500 p-3 text-sm font-medium hover:bg-yellow-500 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
