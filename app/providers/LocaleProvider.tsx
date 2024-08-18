'use client';
import { createContext, useContext, useState } from 'react';

type LocaleContextType = {
	locale: string;
	setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export const useLocale = () => {
	const context = useContext(LocaleContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

export default function LocaleProvider({ children }) {
	const [locale, setLocale] = useState('en');

	const handleSetLocale = (locale: string) => {
		setLocale(locale);
	};

	return (
		<LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
			{children}
		</LocaleContext.Provider>
	);
}
