'use client';

import { useState, useEffect } from 'react';
// import context

import { useGlobalContext } from '../Context/store';

// import components
import House from './House';

import Link from 'next/link';

import { ImSpinner2 } from 'react-icons/im';
import Pagination from './Pagination';

const HouseList = () => {
  const { houses, loading, data, setData, postsPerPage, setPostsPerPage } =
    useGlobalContext();

  const lastPostIndex = postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = houses.slice(firstPostIndex, lastPostIndex);
  const numberOfPosts = houses.length;

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sinto muito. Nada encontrado.
      </div>
    );
  }

  return (
    <section className="mb-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {currentPosts.map((house, index) => {
            return (
              <Link href={`/property?id=${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
        {postsPerPage < numberOfPosts && <Pagination />}
      </div>
    </section>
  );
};

export default HouseList;
