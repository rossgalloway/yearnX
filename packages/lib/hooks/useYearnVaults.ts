import {useFetch} from '@lib/hooks/useFetch';
import {toAddress} from '@lib/utils';
import {useDeepCompareMemo} from '@react-hookz/web';

import {yDaemonVaultsSchema} from './useYearnVaults.types';

import type {TDict} from '@lib/types';
import type {TPossibleVaultFilter, TUseFetchYearnVaults, TYDaemonVault, TYDaemonVaults} from './useYearnVaults.types';

function useFetchYearnVaults(vaultFilter: TPossibleVaultFilter, chainIDs?: number[] | undefined): TUseFetchYearnVaults {
	const {
		data: vaults,
		isLoading,
		mutate
	} = useFetch<TYDaemonVaults>({
		endpoint: `${process.env.YDAEMON_BASE_URI}/vaults/${vaultFilter}?${new URLSearchParams({
			hideAlways: 'true',
			orderBy: 'featuringScore',
			orderDirection: 'desc',
			strategiesDetails: 'withDetails',
			strategiesCondition: 'inQueue',
			chainIDs: chainIDs ? chainIDs.join(',') : [1, 10, 100, 137, 250, 8453, 42161, 747474].join(','),
			limit: '2500'
		})}`,
		schema: yDaemonVaultsSchema
	});

	const vaultsObject = useDeepCompareMemo((): TDict<TYDaemonVault> => {
		const _vaultsObject = (vaults ?? []).reduce((acc: TDict<TYDaemonVault>, vault): TDict<TYDaemonVault> => {
			if (!vault.migration.available) {
				acc[toAddress(vault.address)] = vault;
			}
			return acc;
		}, {});
		return _vaultsObject;
	}, [vaults]);

	return {
		vaults: vaultsObject,
		isLoading,
		mutate
	};
}

export {useFetchYearnVaults};
