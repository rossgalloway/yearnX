import Image from 'next/image';
import {cl} from '@builtbymom/web3/utils';

import type {ReactElement} from 'react';
import type {TSectionProps} from '@lib/utils/types';

export const KatanaSection = ({bgImage}: TSectionProps): ReactElement => (
	<div
		className={'lg-text:grid lg-text:grid-cols-12 lg-text:gap-6 flex min-h-52 w-full flex-col'}
		style={{alignItems: 'stretch'}}>
		<div
			className={cl(
				'col-span-12 md:col-span-8',
				'w-full overflow-hidden rounded-t-2xl bg-cover bg-center bg-no-repeat md:rounded-2xl'
			)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '64px',
				aspectRatio: '16/9' // Ensures the image maintains its aspect ratio
			}}>
			<Image
				src={bgImage ?? '/bg-placeholder.png'}
				priority
				loading={'eager'}
				alt={''}
				className={'w-full'}
				width={1408} /* Scaled x2 to keep quality OK */
				height={1056} /* Scaled x2 to keep quality OK */
				style={{
					objectFit: 'cover',
					width: '100%',
					height: '100%'
				}}
			/>
		</div>
		<div
			className={cl(
				'col-span-12 md:col-span-4',
				'bg-table flex flex-col justify-between rounded-b-2xl p-6 md:p-10 md:rounded-2xl'
			)}>
			<div className={'w-full rounded-2xl'}>
				<p className={'text-md'}>
					<span style={{color: '#f8fe06'}}>{'Welcome'}</span>
					{' weary DeFi Ronin. You have arrived at the Yearn '}
					<span style={{color: '#549ff0'}}>{'Dojo'}</span>
					{'.'}
				</p>
				<br />
				<p className={'text-md'}>
					{'Here, your assets will find rest and reprieve. And a bridge to the Katana Network. '}
				</p>
				<br />
				<p className={'text-md'}>
					{'Deposit USDT, USDC, WBTC, and WETH below to earn yield and additional rewards.'}
				</p>
				<br />
				<p className={'text-md'}>
					{
						'When the Katana Chain is live, your funds will be automatically bridged to Katana and you will be the first '
					}
					<span style={{color: '#f8fe06'}}>{'Samurai!'}</span>
				</p>
			</div>
		</div>
	</div>
);
