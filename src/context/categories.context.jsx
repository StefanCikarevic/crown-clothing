import {createContext, useState, useEffect} from "react";
import {addCollectionAndDocuments, getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => {
    }
});
export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap, setCategoriesMap};

    useEffect(() => {
        const fetchData = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            setCategoriesMap(categoryMap);
        }
        fetchData().catch(console.error);
    }, []);


    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}
