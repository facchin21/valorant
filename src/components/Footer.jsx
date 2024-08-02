import { Link } from "react-router-dom"
import { redes } from '../data/item-footer'

export const Footer = () => {
   
    return (
        <footer className="bg-black font-Farro">
            <ul className="flex items-center justify-between px-12 py-12 lg:justify-center lg:gap-20">
                {redes.map(item => (
                    <li key={item.id} className="flex items-center justify-center">
                        <img src={item.icon} alt={`Icono de ${item.name}`} />
                        <Link to={item.link} target="_blank" 
                        className="text-white transition-all duration-300
                        hover:text-red-500">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}