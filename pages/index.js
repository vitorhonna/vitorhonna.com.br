import React, { useState, useEffect } from 'react';

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Automatically change the image after 2 seconds
    const timeoutId = setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 2000);

    // Clear the timeout when the component unmounts or when isFlipped changes
    return () => clearTimeout(timeoutId);
  }, [isFlipped]);

  const imagePath = isFlipped
    ? 'https://raw.githubusercontent.com/vitorhonna/vitorhonna.com.br/main/imgs/cat.jpeg?token=GHSAT0AAAAAACKC4QW2G2V33YOKUNZ4OTK2ZLQUP5Q'
    : 'https://raw.githubusercontent.com/vitorhonna/vitorhonna.com.br/main/imgs/jucucu.png?token=GHSAT0AAAAAACKC4QW3GFEWN3KW6LBYFYWOZLQUQLQ';

  return (
    <div>
      <h1>Jucucu, vc olhou!</h1>
      <img src={imagePath} alt='image' />
    </div>
  );
}

export default Home;
