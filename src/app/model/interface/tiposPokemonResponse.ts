export interface TiposPokemonResponseInterface {
    count: number,
    next: any,
    previous: any,
    results: [
        {
            name: string,
            namePtbr?: string,
            url: string,
            urlImg?: string
        },
    ]
}