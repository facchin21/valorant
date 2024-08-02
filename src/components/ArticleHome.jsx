import { Link } from "react-router-dom"

export const ArticleHome = ({title, description, link, text, colorRed }) =>{
    return(
        <article>
            {!colorRed ? (
                <article className='font-Farro py-14 text-center'>
                    <h2 className='text-4xl'>
                        {title}
                    </h2>
                    <p className='font-light'>
                        {description}
                    </p>
                    <div className='w-full py-6'>
                        <Link to={link} 
                        className='bg-red-500 py-4 rounded-2xl px-4
                        transiton-all duration-300 hover:text-white'>
                            {text}
                        </Link>
                    </div>
            </article>
            ):(
                <article className='font-Farro py-14 text-center bg-red-500 text-white'>
                <h2 className='text-4xl'>
                    {title}
                </h2>
                <p className='font-light'>
                    {description}
                </p>
                <div className='w-full py-6'>
                    <Link to={link} 
                    className='bg-black py-4 rounded-2xl px-4
                    transiton-all duration-300 hover:text-red-500'>
                        {text}
                    </Link>
                </div>
            </article>
            )}
        </article>
    )
}