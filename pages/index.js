import React, { useState, useEffect } from 'react';

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Automatically change the image after 2 seconds
    const timeoutId = setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 1500);

    // Clear the timeout when the component unmounts or when isFlipped changes
    return () => clearTimeout(timeoutId);
  }, [isFlipped]);

  const imagePath = isFlipped
    ? 'https://raw.githubusercontent.com/vitorhonna/vitorhonna.com.br/main/imgs/cat.jpeg'
    : 'https://raw.githubusercontent.com/vitorhonna/vitorhonna.com.br/main/imgs/jucucu.png';

  return (
    <div>
      <h1>Jucucu, vc olhou!</h1>
      <img src={imagePath} alt='image' />
    </div>
  );
}

export default Home;
