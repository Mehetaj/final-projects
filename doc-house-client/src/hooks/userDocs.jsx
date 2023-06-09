import { useEffect, useState } from "react"

const useDoc = () => {
    const [doc, setDoc] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        fetch('Doctab.json').then(res => res.json()).then(data => {
            setDoc(data)
            setLoading(false)
        })
    },[])
    return [doc, loading]
}

export default useDoc