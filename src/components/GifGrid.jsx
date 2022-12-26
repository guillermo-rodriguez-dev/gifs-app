import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifts'
import useFetchGifs from '../hooks/useFetchGifs'

export default function GifGrid({ category }) {

    const {image, isLoading } = useFetchGifs(category)
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando..</h2>)
            }
            <div className="card-grid">
                {image.map(({ id, title, url }) => <div className='card' key={id}>

                    <img src={url} alt={title} />
                    <p>{title}</p></div>)}
            </div>
        </>
    )
}
