import { useEffect, useRef, useState } from "react";

export function useInfiniteScroll(){
    const observerTarget = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const sentinela = observerTarget.current;
        if (sentinela) {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry => entry.isIntersecting))){
                setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
                console.log("Observando")
            }
        })
            intersectionObserver.observe(sentinela);
            return () => intersectionObserver.disconnect();
        }
    }, [observerTarget, setCurrentPage])

    return { currentPage, observerTarget }
}