import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <Hero >
      <Banner title="thank you" subTitle="your message have been sent">
        <Link to="/" className="btn-primary" >
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default ThankYou;