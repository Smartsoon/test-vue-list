export interface CharactersRequest {
    info: RequestInfo
    results: Character[]
}

export interface CharactersRequest {
    info: RequestInfo
    results: Character[]
}

export interface CharacterRequest extends Character{}

export interface RequestInfo {
    count: number
    pages: number
    next: string
    prev: string
}

export interface LinkWithTitle {
    name: string
    url: string
}
export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: LinkWithTitle
    location: LinkWithTitle
    image: string
    episode: string[]
    url: string
    created: string
}

export interface CharacterItem {
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
}

export interface CharacterListCard {
    id: number
    name: string
    species: string
    image?: string
}