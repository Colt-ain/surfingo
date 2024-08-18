import LocaleProvider from '@/app/providers/LocaleProvider';

export default function Providers({ children }) {
	return <LocaleProvider>{children}</LocaleProvider>;
}
