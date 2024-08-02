import React from 'react';

const Article = React.memo(({ items, type }) => {
  return (
    <div className={`container__${type} gap-8`}>
      {items.length > 0 ? (
        items.map(item => (
          <article key={item.id} className='flex flex-col items-center justify-center py-6'>
            <div>
              <img src={item.image} alt={`Imagen de ${item.name || item.tittle}`} />
            </div>
            <div className='text-center flex flex-col justify-center items-center'>
              <h3 className='text-2xl'>
                {item.name || item.tittle}
              </h3>
              {item.description && (
                <p className='font-medium w-8/12'>
                  {item.description}
                </p>
              )}
            </div>
          </article>
        ))
      ) : (
        <div>No se encontraron resultados para la búsqueda.</div>
      )}
    </div>
  );
});

export default Article;