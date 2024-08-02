import { useEffect, useRef, useState } from "react"

export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
    useEffect(() => {
        if(isFirstInput.current = search === '')  return

        if(search === ''){
            setError("No se ha encontrado el resultado, por favor vuelve a intentarlo!")
            return
        }

        if(search.length <= 2){
            setError("La busqueda debe ser mayor a 2 caracteres!")
            return
        }

        setError(null)
    },[search])

    return { search, updateSearch, error }
}