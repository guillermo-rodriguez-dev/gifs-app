





import React, { useState } from 'react'

export default function AddCategory({onAddCategory}) {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        onAddCategory({newCateogry:inputValue});
        setInputValue("")
    }
    return (
        <form onSubmit={onSubmit}>

            <input type="text" placeholder='Buscar Componentes' value={inputValue} onChange={e => setInputValue(e.target.value)} />
      
        </form>
    )
}
