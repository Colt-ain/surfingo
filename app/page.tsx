import ZemingoLogo from '@/app/ui/zemingo-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

import styles from '@/app/ui/home.module.css';
import Articles from '@/app/ui/Articles';
import { getArticles } from '@/app/lib/actions';
import Providers from '@/app/providers';

export default async function Page({ children }) {
  const articles = await getArticles('en');

  return (
      <main className="flex min-h-screen flex-col p-6">
          <div className="flex h-20 shrink-0 items-end rounded-lg bg-yellow-500 p-4 md:h-52 text-black">
              <ZemingoLogo size='large' />
          </div>
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
              <div className="flex flex-col justify-start gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                  <div className={styles.shape}/>
                  <div className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                      <strong>Welcome to Zemingo Super Duper Mega Application {' '}</strong>
                  </div>
                  <Link
                      href="/dashboard/articles"
                      className="flex items-center gap-5 self-start rounded-lg bg-yellow-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-yellow-500 md:text-base"
                  >
                      <span>Go to dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
                  </Link>
              </div>
              <div className="flex flex-col items-start justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                  <Articles articles={articles}/>
              </div>
          </div>
      </main>
  );
}
