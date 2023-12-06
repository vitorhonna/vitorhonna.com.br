import React, { useState } from 'react';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <h1>Jucucu, vc olhou!</h1>
      <img
        src={
          isHovered
            ? 'https://raw.githubusercontent.com/vitorhonna/vitorhonna.com.br/main/imgs/cat.jpeg?token=GHSAT0AAAAAACKC4QW2G2V33YOKUNZ4OTK2ZLQUP5Q'
            : 'https://raw.githubusercontent.com/vitorhonna/vitorhonna.com.br/main/imgs/jucucu.png?token=GHSAT0AAAAAACKC4QW3GFEWN3KW6LBYFYWOZLQUQLQ'
        }
        alt='image'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default Home;
