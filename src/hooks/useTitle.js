import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Wheel Whiz`
    },[title])
};

export default useTitle;