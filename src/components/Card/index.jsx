import React from 'react';

//post_image_url,votes,url,description,writer_avatar_url,title

const Card = ({id,post_image_url,url,description,writer_avatar_url,title, votes,handleVoteIncrement,handleVoteDecrement}) => {


  return (
    <div className='m-5 flex h-52 '>
      {/* imagen */}
        <figure
        className="mr-5">
          <img
          className="w-auto h-auto max-w-xs "
          src={post_image_url}
          alt="alt-desc" />
        </figure>
      {/* likes buttons */}
      <div
      className='flex flex-col justify-center items-center mr-5'>

        <button onClick={()=>handleVoteIncrement(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
          </svg>
        </button>
        <span>{votes}</span>
        <button onClick={()=>handleVoteDecrement(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
        </button>
      </div>
      {/* content */}
      <div className="flex flex-col">
        <a href={url} target="_blank" rel="noreferrer">
          <h2 className="text-blue-600">{title}</h2>
        </a>
        <p className="overflow-clip">{description}</p>
        <div
        className="flex gap-2 items-center">

          <h3 className="text-gray-500">Escrito por:</h3>
          <figure className="w-10">
              <img
              className="rounded-full"
              src={writer_avatar_url }
              alt="writer-imagen" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Card;
