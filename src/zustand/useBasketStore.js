import { create } from "zustand";

const useBasketStore = create((set) => ({
    basketDrawerStatus: false,
    closeBasketDrawer: () => set(() => ({ basketDrawerStatus: false })),
    openBasketDrawer: () => set(() => ({ basketDrawerStatus: true })),
    products: [],
    setProductsFromLocalStorage: (products) => set(() => ({ products: products })),
    addToBasket: (product) =>
        set((state) => {
            // set locale storage
            localStorage.setItem("productsStorage", JSON.stringify([...state.products, product]));
            return { products: [...state.products, product], basketDrawerStatus: true };
        }),

    deleteFromBasket: (id) =>
        set((state) => {
            const filterdProducts = state.products.filter((item) => {
                if (item.id !== id) {
                    return true;
                }
                return false;
            });
            localStorage.setItem("productsStorage", JSON.stringify(filterdProducts));
            return { products: filterdProducts };
        }),

    increase: (id) =>
        set((state) => {
            const increaseProducts = state.products.map((item) => {
                if (item.id == id) {
                    return { ...item, count: item.count + 1 };
                } else {
                    return item;
                }
            });
            localStorage.setItem("productsStorage", JSON.stringify(increaseProducts));
            return { products: increaseProducts };
        }),

    decrease: (id) =>
        set((state) => {
            const decreaseProducts = state.products.map((item) => {
                if (item.id == id) {
                    return { ...item, count: item.count - 1 };
                } else {
                    return item;
                }
            });
            localStorage.setItem("productsStorage", JSON.stringify(decreaseProducts));
            return { products: decreaseProducts };
        }),
}));

export default useBasketStore;
