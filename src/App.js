import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Sort from './components/Sort';
import Title from './components/Title';
import data from './data.json'

function App() {
  const [myData, setMyData] = useState(data);
  const [sort, setSort] = useState('Descendente');


  const handleSort = (data) => {
    setSort(data);
    if(data === 'Ascendente'){
    }
  }

  const handleVoteIncrement = (id) => {
    const filtered = myData.filter(post => post.id===id)[0]
    filtered.votes++
    const updated = myData.filter(post => post.id!==id).concat(filtered)
    setMyData(updated);
  }

  const handleVoteDecrement = (id) => {
    const filtered = myData.filter(post => post.id===id)[0]
    filtered.votes--
    const updated = myData.filter(post => post.id!==id).concat(filtered)
    setMyData(updated);
  }

  return (
    <div className="">
      <Title title="Blog posts populares" />
      <Sort handleSort={handleSort} />
      {myData?.sort((a, b) => sort==='Descendente' ?  b.votes - a.votes : a.votes - b.votes)
        .map(({id,post_image_url,url,description,writer_avatar_url,votes,title}) =>
        <Card
        key={id}
        id={id}
        post_image_url={post_image_url}
        url={url}
        description={description}
        writer_avatar_url={writer_avatar_url}
        title={title}
        votes={votes}
        handleVoteIncrement={handleVoteIncrement}
        handleVoteDecrement={handleVoteDecrement}
        />)}
    </div>
  );
}

export default App;
