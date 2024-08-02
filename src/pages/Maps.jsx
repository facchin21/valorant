import { Search } from '../components/Search';
import { useFilteredResults } from '../hooks/useFilteredResults';
import { useMaps } from '../hooks/useMaps';
import Article  from '../components/Article'
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
      <h3 className='py-4 text-3xl font-bold'>
            Todos los Mapas
      </h3>
      <Article items={search.length > 0 ? filteredMaps : maps} type="maps" />
    </main>
    );
}
