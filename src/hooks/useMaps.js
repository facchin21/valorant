import { useEffect, useState } from "react";
import { getMaps } from '../services/maps'

export function useMaps () {
    const [maps, setMaps] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMaps = async () => {
            try {
                const newMaps = await getMaps();
                setMaps(newMaps);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMaps()
    }, [])

    return { maps, loading, error}
}