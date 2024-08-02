import { useDebounce } from 'use-debounce';
import { useEffect, useState } from "react";
import { useAgents } from "./useAgents";
import { useSearch } from "./useSearch";
import { useMaps } from "./useMaps";

export function useFilteredResults(filterType = 'both') {
    const { search, updateSearch, error: searchError } = useSearch();
    const { agents, loading: loadingAgents, error: errorAgents } = useAgents();
    const { maps, loading: loadingMaps, error: errorMaps } = useMaps();

    const [debouncedSearch] = useDebounce(search, 300);
    const [filteredAgents, setFilteredAgents] = useState([]);
    const [filteredMaps, setFilteredMaps] = useState([]);

    useEffect(() => {
        if (debouncedSearch.length <= 2) {
            setFilteredAgents([]);
            setFilteredMaps([]);
            return;
        }

        if (filterType === 'both' || filterType === 'agents') {
            const agentsFilter = agents.filter(agent =>
                agent.tittle.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
            setFilteredAgents(agentsFilter);
        }

        if (filterType === 'both' || filterType === 'maps') {
            const mapsFilter = maps.filter(map =>
                map.name.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
            setFilteredMaps(mapsFilter);
        }
    }, [debouncedSearch, agents, maps, filterType]);

    return {
        filteredAgents,
        filteredMaps,
        search,
        updateSearch,
        searchError,
        loadingAgents,
        errorAgents,
        loadingMaps,
        errorMaps
    };
}
