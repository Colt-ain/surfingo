'use client'
import { useLocaleStore } from '@/app/store';
import { useLocale } from '@/app/providers/LocaleProvider';

export default function Locales() {
	const {
		locale,
		setLocale,
	} = useLocale();

	return (
		<div className='flex flex-col text-black'>
			<div className='flex flex-row'>
				<button
					className={`mr-2 rounded-md w-[30px] h-[30px] text-xs ${locale === 'en' ? 'bg-red-500' : ''}`}
					onClick={() => setLocale('en')}>EN</button>
				<button
					className={`mr-2 rounded-md w-[30px] h-[30px] text-xs ${locale === 'fr' ? 'bg-red-500' : ''}`}
					onClick={() => setLocale('fr')}>FR</button>
				<button
					className={`mr-2 rounded-md w-[30px] h-[30px] text-xs ${locale === 'de' ? 'bg-red-500' : ''}`}
					onClick={() => setLocale('de')}>DE</button>
			</div>
		</div>
	)
}
