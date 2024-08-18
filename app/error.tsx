'use client';

import React from 'react';

import './error.css';

export default function Error() {
	return (
		<div className='w-full flex justify-center items-center h-[100vh]'>
			<span className='error-code bg-clip-text bg-linear-error-text-gradient text-gigantic absolute'>500</span>
			<div className='z-10 align-middle text-center'>
				<p className='text-[32px] font-semibold leading-normal mb-1'>Sorry, it&apos;s not you. It&apos;s us.</p>
				<p className='text-zinc-500 text-base font-normal mb-6'>Our team has been notified and is working to resolve it.</p>
				<p className='text-zinc-700 font-extralight text-sm'>Internal server error</p>
			</div>
		</div>
	);
}
