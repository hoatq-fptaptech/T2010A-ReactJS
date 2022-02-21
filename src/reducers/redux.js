import {act} from "@testing-library/react";

const INIT_STATE = {
    cart_item:0,
    items:[]
}
export function reducer(state= INIT_STATE,action) {
    switch (action.type) {
        case "load_cart": {
            if(localStorage.getItem("cart") !== null){
                const cart = localStorage.getItem("cart");
                state = JSON.parse(cart);
            }
            return state;
        }
        case "add_cart":{  // them sp vao gio hang
            const cart_item = state.cart_item;
            let items = state.items;
            items.push(action.product);
            const new_cart = {
                cart_item: cart_item+1,
                items: items
            }
            localStorage.setItem("cart",new_cart);
            state = new_cart;
            return state;
        }
        default: return state;
    }
}