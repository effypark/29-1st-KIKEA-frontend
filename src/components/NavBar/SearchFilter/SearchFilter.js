import React, { useRef } from 'react';
import SearchCard from './SearchCard';
import './SearchFilter.scss';

const SearchFilter = ({ closeFilter }) => {
  const searchFilterRef = useRef();

  return (
    <>
      <div className="overlay" onClick={closeFilter} />
      <div className="search-filter-container" ref={searchFilterRef}>
        {SEARCHDATA.map(kikea => {
          return <SearchCard key={kikea.id} kikea={kikea} />;
        })}
      </div>
    </>
  );
};

export default SearchFilter;

const SEARCHDATA = [
  {
    id: 1,
    img: 'https://www.ikea.com/kr/ko/images/products/paerup-2-seat-sofa-gunnared-beige__0950101_pe800212_s5.jpg?f=s',
    name: 'ANGERSBY 앙에르스뷔',
    description: '2인용소파',
  },
  {
    id: 2,
    img: 'https://www.ikea.com/global/assets/navigation/images/shelving-units-11465.jpeg?imwidth=500',
    name: 'STOCKHOLM 1993',
    description: '탁상조명',
  },
  {
    id: 3,
    img: 'https://www.ikea.com/global/assets/navigation/images/chairs-fu002.jpeg?imwidth=300',
    name: 'MICHIGAN SOFA BED',
    description: '개인침대',
  },
  {
    id: 4,
    img: 'https://www.ikea.com/global/assets/navigation/images/sofas-fu003.jpeg?imwidth=300',
    name: 'KIKEA 소파',
    description: '3단선반',
  },
  {
    id: 5,
    img: 'https://www.ikea.com/kr/ko/images/products/paerup-2-seat-sofa-gunnared-beige__0950101_pe800212_s5.jpg?f=s',
    name: 'ANGERSBY 앙에르스뷔',
    description: '2인용소파',
  },
  {
    id: 6,
    img: 'https://www.ikea.com/global/assets/navigation/images/shelving-units-11465.jpeg?imwidth=500',
    name: 'STOCKHOLM 1993',
    description: '탁상조명',
  },
  {
    id: 7,
    img: 'https://www.ikea.com/global/assets/navigation/images/chairs-fu002.jpeg?imwidth=300',
    name: 'MICHIGAN SOFA BED',
    description: '개인침대',
  },
  {
    id: 8,
    img: 'https://www.ikea.com/global/assets/navigation/images/sofas-fu003.jpeg?imwidth=300',
    name: 'KIKEA 소파',
    description: '3단선반',
  },
  {
    id: 9,
    img: 'https://www.ikea.com/global/assets/navigation/images/shelving-units-11465.jpeg?imwidth=500',
    name: 'STOCKHOLM 1993',
    description: '탁상조명',
  },
  {
    id: 10,
    img: 'https://www.ikea.com/global/assets/navigation/images/chairs-fu002.jpeg?imwidth=300',
    name: 'MICHIGAN SOFA BED',
    description: '개인침대',
  },
  {
    id: 11,
    img: 'https://www.ikea.com/global/assets/navigation/images/sofas-fu003.jpeg?imwidth=300',
    name: 'KIKEA 소파',
    description: '3단선반',
  },
];
