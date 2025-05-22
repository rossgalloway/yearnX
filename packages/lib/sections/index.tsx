import {KatanaSection} from '@lib/sections/KatanaSection';
import {Section1} from '@lib/sections/Section1';
import {Section2} from '@lib/sections/Section2';
import {Section3} from '@lib/sections/Section3';
import {Section4} from '@lib/sections/Section4';
import {Section5} from '@lib/sections/Section5';
import {Section6} from '@lib/sections/Section6';

import type {ReactElement} from 'react';

type TSectionProps = {
	variant: 1 | 2 | 3 | 4 | 5 | 6 | 7;
	title: string;
	description: string;
	bgImage?: string;
	cards?: {
		title: string;
		currency?: string;
		value: number;
		decimals: number;
		isReady: boolean;
	}[];
};
export function Section({variant, title, description, bgImage, cards}: TSectionProps): ReactElement {
	switch (variant) {
		case 1:
			return (
				<Section1
					title={title}
					description={description}
					bgImage={bgImage}
				/>
			);
		case 2:
			return (
				<Section2
					title={title}
					description={description}
					bgImage={bgImage}
					cards={cards}
				/>
			);
		case 3:
			return (
				<Section3
					title={title}
					description={description}
					bgImage={bgImage}
					cards={cards}
				/>
			);
		case 4:
			return (
				<Section4
					title={title}
					description={description}
					bgImage={bgImage}
					cards={cards}
				/>
			);
		case 5:
			return (
				<Section5
					title={title}
					description={description}
					bgImage={bgImage}
				/>
			);
		case 6:
			return (
				<Section6
					title={title}
					description={description}
					bgImage={bgImage}
					cards={cards}
				/>
			);
		case 7:
			return (
				<KatanaSection
					title={title}
					description={description}
					bgImage={bgImage}
					cards={cards}
				/>
			);
	}
}
