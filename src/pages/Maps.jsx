import { Search } from '../components/Search';
import { useFilteredResults } from '../hooks/useFilteredResults';
import { useMaps } from '../hooks/useMaps';
export const Maps = () => {
    const {
        filteredMaps,
        search,
        updateSearch,
        searchError,
        loadingMaps,
        errorMaps
    } = useFilteredResults('maps')
    const { maps, loading, error} = useMaps()

    if (loadingMaps) {
        return <div>Loading...</div>;
    }

    if (errorMaps) {
        return <div>{errorMaps.message}</div>;
    }

    return (
        <main className='flex flex-col items-center justify-center main__maps'>
            <Search filterType="maps" />
            <div className='container__maps gap-8'>
                {search.length > 0 ? (
                    filteredMaps.length > 0 ? (
                        filteredMaps.map(map => (
                            <article key={map.id} className='flex flex-col items-center justify-center py-6'>
                                <div>
                                    <img src={map.image} alt={`Imagen de ${map.name}`} />
                                </div>
                                <div className='text-center flex flex-col justify-center items-center'>
                                    <h3 className='text-2xl'>
                                        {map.name}
                                    </h3>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div>No se encontraron mapas para la búsqueda.</div>
                    )
                ) : (
                    <div className='font-Farro text-center py-12'>
                        <h3 className='text-3xl'>Total de Mapas</h3>
                        {maps.map(map => (
                            <article key={map.id} className='flex flex-col items-center justify-center py-6'>
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
        </main>
    );
}
