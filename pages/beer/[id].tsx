/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import { Layout } from 'components';

export default function Id({ beer }: { beer: any }) {
  return (
    <Layout>
      <div className="container w-100 p-5">
        <div className="row">
          <div className="col-2">
            <img
              src={beer.image_url}
              alt=""
              height={350}
            />
          </div>
          <div className="col card text-bg-success p-4 bg-gradient">
            <h4>
              {beer.name}
            </h4>
            <p>
              {beer.tagline}
            </p>
            <p>
              {beer.description}
            </p>
            <p>
              AB: 
              {' '}
              {beer.abv}
            </p>
            <p>
              Food Pairing: 
              {' '}
              {beer.food_pairing}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  const data = await axios<any, any>(`https://api.punkapi.com/v2/beers/${String(context.query.id)}`)
    .then((res) => res.data)
    .catch((error) => console.error('error', error));

  return {
    props: {
      beer: data[0],
    },
  };
}
