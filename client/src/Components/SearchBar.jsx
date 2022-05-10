import { useState } from "react";
import * as Style from './Searchbar.styles';

const data = require("../data.json");

export default function SearchBar() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  return (
    <Style.Container>
      <h1>Search by City</h1>

      <Style.Search>
        <Style.SearchInner>
          <Style.Input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </Style.SearchInner>
        <Style.Dropdown>
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const cityName = item.name.toLowerCase();

              return (
                searchTerm &&
                cityName.startsWith(searchTerm) &&
                cityName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <Style.DropdownRow
                onClick={() => onSearch(item.name)}
                key={item.name}
              >
                {item.name}
              </Style.DropdownRow>
            ))}
        </Style.Dropdown>
      </Style.Search>
    </Style.Container>
  );
}