import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/Login/reducer";
import { ProductsReducer } from "../../components/products/reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    product: ProductsReducer
});

export type RootState = ReturnType<typeof rootReducer>;