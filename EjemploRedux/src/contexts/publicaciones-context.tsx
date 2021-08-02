import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';
import IPublicacion from '../models/IPublicacion';

interface PublicacionesContextProps {
  publis: IPublicacion[];
  setPublicaciones: (publis: IPublicacion[]) => void;
  fetchPublicacioncesContext: () => Promise<void>;
}

const PublicacionesContext = createContext<PublicacionesContextProps>({
  publis: [],
  setPublicaciones: () => {},
  fetchPublicacioncesContext: () => Promise.resolve(),
});

export const PublicacionesProvider: React.FC = ({children}) => {
  const [publis, setPublicaciones] = useState<IPublicacion[]>([]);
  const fetchPublicacioncesContext = async () => {
    try {
      const publicaciones = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPublicaciones(publicaciones.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = {publis, setPublicaciones, fetchPublicacioncesContext};

  return (
    <PublicacionesContext.Provider value={val}>
      {children}
    </PublicacionesContext.Provider>
  );
};

export const usePublicaciones = () => useContext(PublicacionesContext);
