import * as AuthActionCreators from '../../components/auth/Login/actions';
import * as ProductActionCreators from '../../components/products/actions';

const actions = {
    ...AuthActionCreators,
    ...ProductActionCreators
}

export default actions;