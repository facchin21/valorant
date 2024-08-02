import imageBanner from '../assets/image/banner.webp'
import { ArticleHome } from '../components/ArticleHome'
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
            
        </main>
    )
}