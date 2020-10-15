import * as actionTypes from './actionTypes';

export function getProductsSuccess(categories) {
    return {type: actionTypes.GET_PRODUCTS_SUCCESS, payload: categories}
}

export function createProductSuccess(product) {
    return {type: actionTypes.CREATE_PRODUCTS_SUCCESS, payload: product}
}

export function updateProductSuccess(product) {
    return {type: actionTypes.UPDATE_PRODUCTS_SUCCESS, payload: product}
}

export function saveProductApi(product) {
    return fetch("http://localhost:3000/products/" + (product.id || ""), {
        method: product.id ? "PUT" : "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(product)
    }).then(handleResponse).catch(handleError);
}

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product).then(savedProduct=>{
            product.id?dispatch(updateProductSuccess(savedProduct)):dispatch(createProductSuccess(savedProduct));
        }).catch(error=>{throw error;})
    }
}

export function getProducts(categoryID) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (categoryID) {
            url = url + "?categoryId=" + categoryID
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    };
}

export async function handleResponse(response) {
    if(response.ok){
        return response.json();
    }

    const error = await response.text()
    throw new Error(error)
}

export function handleError(error) {
    console.error("Bir hata oluştu.")
    throw error;
}