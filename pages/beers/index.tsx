/* eslint-disable @next/next/no-img-element */
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { Layout, Search, Pagination, Loader } from 'components';
import { beerUrl } from 'constants/index';
import { cutString } from 'utils';

export default function Home() {
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);
  const [listOfBeers, setListOfBeers] = useState<any[]>();
  const [loading, setLoading] = useState(true);

  const onClear = useCallback(() => {
    setSearch(undefined);
    setPage(1);
  }, []);

  const onChange = useCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, []);

  const onChangePage = useCallback((value: number) => {
    setPage((state) => state + value);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios<any, any>('https://api.punkapi.com/v2/beers', {
      params: {
        beer_name: search,
        page,
        per_page: 12,
      },
    })
      .then((res) => setListOfBeers(res.data))
      .catch((error) => console.error('error', error))
      .finally(() => setLoading(false));
  }, [page, search]);

  useEffect(() => console.log(listOfBeers), [listOfBeers]);

  return (
    <Layout>
      <div className="container p-4">
        <Search
          value={search}
          onChange={onChange}
          onClear={onClear}
        />
      </div>
      {loading && (
        <Loader />
      )}
      {!loading && (
        <>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {listOfBeers?.map((beer) => (
                <div className="col" key={beer.id}>
                  <div
                    className="card m-2 p-2 text-bg-success"
                    style={{
                      width: '18rem',
                    }}
                  >
                    <div className="d-flex justify-content-center">
                      <img
                        src={beer.image_url}
                        className="card-img-top"
                        alt=""
                        style={{
                          height: '180px',
                          width: 'auto',
                        }}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-truncate">
                        {beer.name}
                      </h5>
                      <p
                        className="card-text"
                        style={{
                        // minHeight: '280px',
                        }}
                      >
                        {cutString(beer.description)}
                      </p>
                      <Link href={`${beerUrl}/${beer.id}`} className="btn btn-primary">
                        Open
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container p-4">
            <Pagination
              currentPage={page}
              onPageChange={onChangePage}
            />
          </div>

        </>
      )}
    </Layout>
  );
}
