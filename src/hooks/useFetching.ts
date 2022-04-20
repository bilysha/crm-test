import {useState} from 'react'

export const useFetching = (callback: any) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({} as any);

	const fetching = async () => {
		setLoading(true);

		try {
			await callback();
			await wait(2000);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}

	return [fetching, loading, error];
}

function wait(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}