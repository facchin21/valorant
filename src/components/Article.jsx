import React from 'react';

const Article = React.memo(({ agent }) => (
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
));

export default Article;
