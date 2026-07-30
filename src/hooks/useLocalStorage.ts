import { useCallback } from "react"

export function useLocalStorage() {
    function setItem(key: string, value: unknown){
        try{
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch(error){
            return error
        }
    }

    const getItem = useCallback((key: string) => {
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : undefined
        }catch(error){
            return error
        }
    }, []);

    return {setItem, getItem}
}