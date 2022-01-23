
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';


  const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
          const result = await axios(url);
          setData(result.data);
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }, [url]);
  
    return [{ data, isLoading, isError }, setUrl];
  };
  
  function App() {
    const defaultQuery = "macos";
    const searchApiEndpoint = "https://hn.algolia.com/api/v1/search?query=";
  
    const [query, setQuery] = useState(defaultQuery);
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      searchApiEndpoint + defaultQuery,
      { hits: [] }
    );
  
    return (
      <div className="App">
        <form
          onSubmit={e => {
            e.preventDefault();
            doFetch(searchApiEndpoint + query);
          }}
        >
          <input
            type="text"
            name="query"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button>Search</button>
        </form>
        {isError && <div>Something went wrong ...</div>}
        {isLoading && !isError && <p>Loading...</p>}
        {!isLoading && !isError && (
          <ul>
            {data.hits.map(item => (
              <li key={item.objectId}>
                <a href={item.url} target="_blank">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  

export default App;
