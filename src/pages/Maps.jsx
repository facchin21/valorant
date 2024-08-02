import { useMaps } from '../hooks/useMaps'

export const Maps = () =>{
    const { maps, loading, error} = useMaps()
    
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }
    return (
        <main className='flex items-center justify-center main__agents'>
        <div className='container__agents gap-8'>
            {maps.map(agent => (
                <article key={agent.id}
                className='flex flex-col items-center justify-center py-6'>
                    <div>
                        <img src={agent.image} alt={`Imagen de ${agent.tittle}`} />
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <h3 className='text-2xl'>
                            {agent.name}
                        </h3>
                    </div>
                </article>
            ))}
        </div>
    </main>
    )
}