import React from 'react';

function Article(props) {
  return (
    <div>
      <h2>{props.article.title}</h2>
      <section>{props.article.text}</section>
    </div>
  )
}

export default Article;