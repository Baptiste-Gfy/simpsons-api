import React from 'react';
  
function BlockQuote({ quote }) {
  return (
    <div className="BlockQuote">
      <h1>{quote.character}</h1>
      <img src={quote.image} alt={quote.character} />
      <p>{quote.quote}</p>
      <p>{quote.characterDirection}</p>
    </div>
  );
};
  
export default BlockQuote;