import imageRiot from '../assets/image/riot-games-new-logo-qhg 1.png'
import imageLogo from '../assets/image/valorantlogo 1.png'
import { items } from '../data/item-navbar'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav className='bg-black w-full px-12 flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center justify-center'>
                <img src={imageRiot} alt="image logo Riot"/>
                <img src={imageLogo} alt="Image logo Valorant" />
            </div>
            <ul className='font-Farro flex flex-row gap-2 items-center justify-center'>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/${item.link}`} 
                        className='text-white transition-all duration-300 hover:text-red-500'>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}