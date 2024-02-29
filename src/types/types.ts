export interface IFiltersValue {
    name: string,
    value: string | number
}

export interface FilterProps {
    addActiveFilter: (e: IFiltersValue | null) => void
}

export interface ItemsData {
    id: string,
    price: number,
    brand?: string | null,
    product: string,
}

export interface ContentProps {
    activeFilter: IFiltersValue | null
}

export interface ProductProps {
    product: ItemsData
}