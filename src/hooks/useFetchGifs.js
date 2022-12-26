import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifts'

export default function useFetchGifs(category) {
    const [image, setImage] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getGifs(category).then((images) => { setImage(images), setIsLoading(false) })
    }, [])


    return {
        image: image,
        isLoading,
    }
}
