import { useEffect, useRef, useState } from "react";

export function useInfiniteScroll(){
    const observerTarget = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const sentinela = observerTarget.current;
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setCurrentPage((prev) => {
                    return prev + 1;
                });
            }
        });
    
        if (sentinela) {
            intersectionObserver.observe(sentinela);
        }
        
        return () => {
            if(sentinela) intersectionObserver.disconnect();
        };
    }, [observerTarget.current]);

    return { currentPage, observerTarget, setCurrentPage };
}