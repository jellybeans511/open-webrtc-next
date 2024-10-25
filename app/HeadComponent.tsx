import React from 'react';
import Head from 'next/head';

const HeadComponent = () => {
  return (
    <Head>
      <title>My Custom Page</title>
      <link rel="icon" href="./images/favicon.ico" type="image/jpeg" />
      <meta name="description" content="WebRTC Next App" />
    </Head>
  );
};

export default HeadComponent;
