import { Search } from '../components/Search';
import { useFilteredResults } from '../hooks/useFilteredResults';
import { useAgents } from '../hooks/useAgents';
import Article from '../components/Article';

export const Agents = () => {
    const {
        filteredAgents,
        search,
        updateSearch,
        searchError,
        loadingAgents,
        errorAgents
    } = useFilteredResults('agents');
    
    const { agents, loading, error } = useAgents();

    // Mostrar loading si está cargando
    if (loadingAgents || loading) {
        return <div>Loading...</div>;
    }

    // Mostrar error si existe
    if (errorAgents || error) {
        return <div>{errorAgents?.message || error?.message}</div>;
    }

    // Mostrar mensaje de error de búsqueda si existe
    if (searchError) {
        return <div>{searchError}</div>;
    }

    return (
        <main className='flex flex-col items-center justify-center main__agents'>
        <Search filterType="agents" />
        <h3 className='py-4 text-3xl font-bold'>
            Todos los Agentes
        </h3>
        <Article items={search.length > 0 ? filteredAgents : agents} type="agents" />
      </main>
    );
};
