import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete({onSelectItem = () => {}}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  const shouldRenderList = !isLoading && data.length > 0;

  const debounceFunc = func => {
    let timeoutId;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(func, DEBOUNCE_DELAY);
  };

  const handleInputChange = e => {
    setQuery(e.target.value);

    debounceFunc(() => {
      fetchData();
    });
  };

  const handleItemClick = item => {
    onSelectItem(item);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(ITEMS_API_URL, {
        params: {
          q: query,
        },
        headers: {},
      });
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`wrapper ${isLoading && 'is-loading'}`}>
      <div className="control">
        <input type="text" className="input" onChange={handleInputChange} />
      </div>
      {shouldRenderList && (
        <div className="list is-hoverable">
          {data.map(item => {
            <a className="list-item" onClick={() => handleItemClick(item)}>
              {item}
            </a>;
          })}
        </div>
      )}
    </div>
  );
}
