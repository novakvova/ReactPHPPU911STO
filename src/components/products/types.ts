export interface IProductItem {
    id: number;
    name: string;
    detail: string;
} 

export interface MyTestObject {
    name: string;
    girl?: string; 
}

export interface IProductsModel {
    success: boolean;
    message: string;
    data: Array<IProductItem>;
    last_page: number;
}

export interface IProductSearch {
    page?: null|number|string,
    name?: null|string 
}

export interface ProductsState {
    products: Array<IProductItem>;
    last_page: number
}

export enum ProductsActionTypes {
    FETCH_PRODUCTS="FETCH_PRODUCTS"
}

export interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS,
    payload: ProductsState
}

export type ProductActions = FetchProductsAction;

