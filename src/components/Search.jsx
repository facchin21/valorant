import { useFilteredResults } from '../hooks/useFilteredResults'

export const Search = ({ filterType = 'both' }) => {
    const {
        filteredAgents,
        filteredMaps,
        search,
        updateSearch,
        searchError,
        loadingAgents,
        errorAgents,
        loadingMaps,
        errorMaps
    } = useFilteredResults(filterType);

    const handleChange = (event) => {
        const newSearch = event.target.value;
        updateSearch(newSearch);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <div>
            <form className='flex flex-col justify-center font-Farro mt-4 py-6
            px-8 border-2 border-black rounded-2xl'
            onSubmit={handleSubmit}>
                <label className="text-lg">
                    Buscar:
                </label>
                <input type="text" placeholder="Gekko, Fade, Bind ..."
                className="border py-2 px-4 border-slate-400 rounded-md"
                onChange={handleChange}/>
                <button className="w-full py-2 bg-black my-2 text-white
                transition-all duration-300 hover:bg-red-500">
                    Buscar
                </button>
            </form>

            {searchError && <p className="text-red-500 font-Farro">
                {searchError}
            </p>}

            {filterType !== 'maps' && filteredAgents.length > 0 && (
                <div className='font-Farro py-12'>
                    <h3 className='text-2xl text-center'>
                        Agentes filtrados
                    </h3>
                    {filteredAgents.map(agent => (
                        <article key={agent.id}
                        className='flex flex-col items-center justify-center py-6'>
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

            {filterType !== 'agents' && filteredMaps.length > 0 && (
                <div className='font-Farro py-12'>
                    <h3 className='text-2xl text-center'>
                        Mapas filtrados
                    </h3>
                    {filteredMaps.map(map => (
                        <article key={map.id}
                        className='flex flex-col items-center justify-center py-6'>
                            <div>
                                <img src={map.image} alt={`Imagen de ${map.name}`} />
                            </div>
                            <div className='text-center flex flex-col justify-center items-center'>
                                <h3 className='text-2xl'>
                                    {map.name}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            )}

        </div>
    )
}