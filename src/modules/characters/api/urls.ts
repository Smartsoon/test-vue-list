export const characters = (page: number, name?: string) => `https://rickandmortyapi.com/api/character/?page=${page}${name ? `&name=${name}`: ''}`
export const character = (id: number) => `https://rickandmortyapi.com/api/character/${id}`