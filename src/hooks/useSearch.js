function useSearch(searchQuery) {
  const fetchSearchQuery = fetch(`https://pfa.foreca.com/api/v1/location/search/${searchQuery}`, {
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY2MzM2MTk2NywiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2NjMzNjE5NjcsImp0aSI6IjUxNDc0OTI0Yjc3NTQxMDkiLCJzdWIiOiJpZ29yaW9oYTk1IiwiZm10IjoiWERjT2hqQzQwK0FMamxZVHRqYk9pQT09In0.fZfEoqlYCWc4qs6-muuStu-ZCITDxeN5Qpg2705Sb00'
    }
  });
  return fetchSearchQuery;
}

export default useSearch;
