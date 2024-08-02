import imageBanner from '../assets/image/banner.webp'
import { ArticleHome } from '../components/ArticleHome'
import { Search } from '../components/Search'
import { itemsHome } from '../data/item-home'
export const Home = () => {
    
    return(
        <main>
            {imageBanner && (
                <img src={imageBanner} alt="Imagen banner Valorant" className='w-full'/>
            )}
            {itemsHome.map(item => (
                <ArticleHome  key={item.id}
                title={item.title}
                 description={item.description}
                 link={item.link}
                 text={item.text}
                 colorRed={item.colorRed}
                />            
            ))}
            <div className='w-full font-Farro py-12 text-center flex flex-col justify-center items-center'>
                <h3 className='text-2xl'>
                    La Aplicacion cuenta con un buscador
                </h3>
                <p className='text-md font-light pb-8'>
                    Podes buscar el mapa o personaje que mas te guste
                </p>
                <Search/>
            </div>        
        </main>
    )
}