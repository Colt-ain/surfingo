import Image from 'next/image';
import { rubik } from '@/app/ui/fonts';

export default function ZemingoLogo({
    size = 'large',
}: {
    size: 'large' | 'small';
}) {
  return (
    <div className={`${rubik.className} flex flex-row items-center leading-none text-black`}>
        <Image
            style={{
                width: 'auto',
                height: 'auto',
            }}
            src="/logo-image.png"
            width={size === 'large' ? 60 : 30}
            height={size === 'large' ? 60: 30}
            alt="Surfingo logo"
        ></Image>
      <div className={`text-2xl pl-3`}>Surfingo</div>
    </div>
  );
}
