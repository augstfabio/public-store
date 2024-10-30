import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const useFetchFirebase = (Produtos) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, Produtos));
               
                const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                
                setData(items)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [Produtos])
    return {data, loading, error}
    
}

export default useFetchFirebase