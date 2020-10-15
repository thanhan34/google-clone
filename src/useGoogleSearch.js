import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import API_KEY from './key'
const CONTEXT_KEY = "501d1878a84213711"
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData()
    }, [term])
    return { data }
}

export default useGoogleSearch
