type TQueryType = Partial<{
	[key: string]: string | string[];
}>;

type TQueryDataParams = {
	fields: string[];
	values: { [key: string]: any };
};

export default function queryParser(
	query: TQueryType,
	queryDataParams: TQueryDataParams
) {
	return Object.fromEntries(
		Object.entries(query)
			.filter(([key]: any) => queryDataParams.fields.includes(key))
			.map(([key, value]: any) => [
				key,
				queryDataParams.values[value as keyof typeof queryDataParams.values] ||
					(queryDataParams.fields.includes(key) && value),
			])
			.filter(([key, value]) => value)
	);
}
