export interface IProductItem {
    id: number;
    name: string;
    detail: string;
} 

export interface IProductsModel {
    success: boolean;
    message: string;
    data: Array<IProductItem>;
}