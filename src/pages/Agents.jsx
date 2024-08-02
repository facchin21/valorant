import { Search } from '../components/Search';
import { useFilteredResults } from '../hooks/useFilteredResults';
import { useAgents } from '../hooks/useAgents';

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
            <div className='container__agents gap-8'>
                {search.length > 0 ? (
                    filteredAgents.length > 0 ? (
                        filteredAgents.map(agent => (
                            <article key={agent.id} className='flex flex-col items-center justify-center py-6'>
                                <div>
                                    <img src={agent.image} alt={`Imagen de ${agent.tittle}`} />
                                </div>
                                <div className='text-center flex flex-col justify-center items-center'>
                                    <h3 className='text-2xl'>
                                        {agent.tittle}
                                    </h3>
                                    <p className='font-medium w-8/12'>
                                        {agent.description}
                                    </p>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div>No se encontraron agentes para la búsqueda.</div>
                    )
                ) : (
                    <div className='text-center font-Farro py-12'>
                         <h3 className='text-3xl'>Total de Agentes</h3>
                        {agents.map(agent => (
                            <article key={agent.id} className='flex flex-col items-center justify-center py-6'>
                                <div>
                                    <img src={agent.image} alt={`Imagen de ${agent.tittle}`} />
                                </div>
                                <div className='text-center flex flex-col justify-center items-center'>
                                    <h3 className='text-2xl'>
                                        {agent.tittle}
                                    </h3>
                                    <p className='font-medium w-8/12'>
                                        {agent.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};
