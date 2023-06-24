import React, { Fragment, useEffect, useState } from "react";
import BlogArticle from './Components/BlogArticle';
import Second from './Header'

const App = () => {
  const [ count, useCount ] = useState(0);
  const [ childrenContent, setChildrenContent ] = useState('');

  const receiveContentChanged = (received) => setChildrenContent(received);

  return (
    <Fragment key="fragment">
      <Second title="My blog articles" content={childrenContent} >
        <h4>Im the children subtitle</h4>
        <h5>childrenContent</h5>
      </Second>

      <button onClick={() => useCount(count + 1)}>Clicked {count} times</button>

      {articles.map(article =>
        <BlogArticle
          key={article.title}
          title={article.title}
          subtitle={article.subtitle}
          content={article.content}
          onContentChanged={receiveContentChanged}
        />)
      }
    </Fragment>
  );
};

const articles = [
  {
    title: "Como ficar monstro em 15 dias",
    subtitle: "Ficar monstrao, 15 dias, rapidin",
    content: "eeeeeeeeeeeu, parado no bailao UUUH no bailao, ela com o popozao"
  }, {
    title: "Lukinha da 17 e a lenda do morro",
    subtitle: "Era so mais um silva que a estrela nao brilha",
    content: "ele era funkeiro mas era pai de familia"
  }, {
    title: "Ursinhos Cariani",
    subtitle: "eu treino vc, vc me treina, somos uma familia feliz",
    content: "com um forte abraco e um grande beijo meu, meu treininho eh pra, vo, ce"
  },
];

export default App;