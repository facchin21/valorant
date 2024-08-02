import { useEffect, useState } from "react"
import { useAgents } from "./useAgents"
import { useMaps } from "./useMaps"
import { useSearch } from "./useSearch"

export function useFilteredResults(filterType = 'both') {
    const { search, updateSearch,
         error : searchError} = useSearch()
 
    const { agents, loading: loadingAgents,
         error: errorAgents } = useAgents();
         
    const { maps, loading: loadingMaps,
         error: errorMaps } = useMaps();

    const [filteredAgents, setFilteredAgents] = useState([]);
    const [filteredMaps, setFilteredMaps] = useState([]);


    useEffect(()=>{
        if (search.length <= 2) {
            setFilteredAgents([])
            setFilteredMaps([])
            return
        }

        if (filterType === 'both' || filterType === 'agents') {
            const agentsFilter = agents.filter(agent =>
                agent.tittle.toLowerCase().includes(search.toLowerCase())
            )
            setFilteredAgents(agentsFilter)
        }

        if (filterType === 'both' || filterType === 'maps') {
            const mapsFilter = maps.filter(map =>
                map.name.toLowerCase().includes(search.toLowerCase())
            )
            setFilteredMaps(mapsFilter)
        }
    }, [search, agents, maps, filterType])


    return { filteredAgents, filteredMaps,
         search, updateSearch, searchError,
          loadingAgents, errorAgents,
           loadingMaps, errorMaps };
}