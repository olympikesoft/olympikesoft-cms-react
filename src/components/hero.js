import React from 'react';
import Button from 'muicss/lib/react/button';




const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-headline mui--text-display2 mui--text-light">Flat CMS Test Site</div>
      <div className="hero-headline-description mui--text-headline2 mui--text-light">This is the Main page of the test site.</div>
      <Button color="primary" className="hero-button-primary">button</Button>
    </div>
  );
}

export default Hero;
