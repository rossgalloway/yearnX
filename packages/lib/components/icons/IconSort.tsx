import React from 'react';

import type {ReactElement} from 'react';

function IconSort({
	leftIconColorClassName,
	rightIconColorClassName,
	...props
}: {
	leftIconColorClassName: string;
	rightIconColorClassName: string;
	leftOpacity?: string;
	rightOpacity?: string;
} & React.SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg
			{...props}
			width={'16'}
			height={'16'}
			viewBox={'0 0 16 16'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<path
				d={'M4.66667 10.6666V2.66663M4.66667 2.66663L2 5.33329M4.66667 2.66663L7.33333 5.33329'}
				stroke={'currentColor'}
				strokeWidth={'1.5'}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				className={leftIconColorClassName}
			/>
			<path
				d={'M11.3334 5.33325V13.3333M11.3334 13.3333L14.0001 10.6666M11.3334 13.3333L8.66675 10.6666'}
				stroke={'currentColor'}
				strokeWidth={'1.5'}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				className={rightIconColorClassName}
			/>
		</svg>
	);
}

export {IconSort};
