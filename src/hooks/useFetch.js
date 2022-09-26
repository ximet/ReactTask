function useFetch(endpoint, searchQuery) {
  const fetchSearchQuery = fetch(
    `https://pfa.foreca.com/api/v1/location/${endpoint}/${searchQuery}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
      }
    }
  );
  return fetchSearchQuery;
}

export default useFetch;
