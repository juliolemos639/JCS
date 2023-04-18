'use client';

import { housesData } from '../data';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type UseContextProps = {
  children: ReactNode;
};

interface ContextProps {
  houses: any[];
  setHouses: Dispatch<SetStateAction<string[]>>;
  neighborhood: string;
  setNeighborhood: Dispatch<SetStateAction<string>>;
  neighborhoods: string[];
  setNeighborhoods: Dispatch<SetStateAction<string[]>>;
  property: string;
  setProperty: Dispatch<SetStateAction<string>>;
  properties: string[];
  setProperties: Dispatch<SetStateAction<string[]>>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  handleClick: Dispatch<SetStateAction<void>>;
  houseProperty: string[];
  setHouseProperty: Dispatch<SetStateAction<string[]>>;
  data: any[];
  setData: Dispatch<SetStateAction<string[]>>;
  postsPerPage: number;
  setPostsPerPage: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  houses: [],
  setHouses: () => {},
  neighborhood: '',
  setNeighborhood: (): string => '',
  neighborhoods: [],
  setNeighborhoods: () => {},
  property: '',
  setProperty: (): string => '',
  properties: [],
  setProperties: () => {},
  price: '',
  setPrice: (): string => '',
  loading: true || false,
  setLoading: (): boolean => true || false,
  handleClick: (): string => '',
  houseProperty: [],
  setHouseProperty: () => {},
  data: [],
  setData: () => {},
  postsPerPage: 0,
  setPostsPerPage: () => 0,
});

export const GlobalContextProvider = ({ children }: UseContextProps) => {
  const [houses, setHouses] = useState<any[]>(housesData);
  const [neighborhood, setNeighborhood] = useState('Local (todos)');
  const [neighborhoods, setNeighborhoods] = useState<string[]>([]);
  const [property, setProperty] = useState('Tipo (todos)');
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState('Valor (todos)');
  const [loading, setLoading] = useState(false);
  const [houseProperty, setHouseProperty] = useState<string[]>([]);
  const [data, setData] = useState<string[]>([]);
  const [postsPerPage, setPostsPerPage] = useState<number>(3);

  // Return Neighborhoods

  useEffect(() => {
    const allNeighborhoods = houses.map((house) => {
      return house.neighborhood;
    });

    //remove duplicates
    const uniqueNeighborhoods = [
      'Local (todos)',
      ...Array.from(new Set(allNeighborhoods)),
    ];
    // set countries state
    setNeighborhoods(uniqueNeighborhoods);
  }, []);

  // Return all properties

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove duplicates
    const uniqueProperties = [
      'Tipo (todos)',
      ...Array.from(new Set(allProperties)),
    ];
    // set countries state
    setProperties(uniqueProperties);
  }, []);

  // On click

  const handleClick = () => {
    // reset the numbers of posts per page to initial value
    setPostsPerPage(3);

    setLoading(true);
    // create a function that checks if the string includes '(todos)'
    const isDefault = (str: string) => {
      return str.split(' ').includes('(todos)');
    };

    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);

    // get second value os price wich is the maximum price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // if all values are selected
      if (
        house.neighborhood === neighborhood &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all values are default
      if (isDefault(neighborhood) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if neighborhood is not default
      if (!isDefault(neighborhood) && isDefault(property) && isDefault(price)) {
        return house.neighborhood === neighborhood;
      }

      // if property type is not default
      if (isDefault(neighborhood) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default
      if (isDefault(neighborhood) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if neighborhood and property type are not default
      if (
        !isDefault(neighborhood) &&
        !isDefault(property) &&
        isDefault(price)
      ) {
        return house.neighborhood === neighborhood && house.type === property;
      }

      // if neighborhood and price are not default
      if (
        !isDefault(neighborhood) &&
        isDefault(property) &&
        !isDefault(price)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.neighborhood === neighborhood;
        }
      }

      // if property type and price are not default
      if (
        isDefault(neighborhood) &&
        !isDefault(property) &&
        !isDefault(price)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <GlobalContext.Provider
      value={{
        houses,
        setHouses,
        neighborhood,
        setNeighborhood,
        neighborhoods,
        setNeighborhoods,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick,
        houseProperty,
        setHouseProperty,
        data,
        setData,
        postsPerPage,
        setPostsPerPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
