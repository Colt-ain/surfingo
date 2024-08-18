import { create } from 'zustand';

interface LocalStoreActions {
	setLocale: (value: string) => void;
}

interface LocalStoreState {
	locale: 'en' | 'fr' | 'de';
}

export const useLocaleStore = create<LocalStoreState & LocalStoreActions>((set) => ({
	locale: 'en',
	setLocale: (value: string) => {
		set(() => ({ locale: value }));
	},
}));
