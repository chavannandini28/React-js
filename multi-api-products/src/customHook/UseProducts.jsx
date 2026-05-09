import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseProducts = (initialURL) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    console.log(initialURL)
    async function fetchProducts() {
        // fetch('',{
        //     body:{},
        //     method:"GET"
        // })
        // .then(res=>res.json())
        // .then(data=>setProducts(data))

        try {
            const res = await axios.get(initialURL)

            if (res.data) {
                setData(res.data)
            } else {
                setError(true)
            }
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [initialURL])

    return { data, loading, error }
}

export default UseProducts