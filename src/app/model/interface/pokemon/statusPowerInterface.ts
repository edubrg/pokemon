export interface StatusPowerInterface {
	stats: [
		{
			base_stat: number,
			effort: number,
			stat: {
				name: string,
				url: string
			}
		},
	]
}