<Style.Dropdown>
    {data
        .filter(item => {
            const searchTerm = value.toLowerCase();
            const cityName = item.name.toLowerCase();

            return searchTerm && cityName.startsWith(searchTerm) && cityName !== searchTerm;
        })
        .slice(0, 10)
        .map(item => (
            <Style.DropdownRow onClick={city => getCurrentCity(city)}>
                {item.name}
            </Style.DropdownRow>
        ))}
</Style.Dropdown>



const SearchBar = ({ results, onClick }) => {
    return (
        <S.ResultWrapper>
            {results.map(result => (
                <S.ResultItems key={result.id} onClick={() => onClick(result)}>
                    <span>{`${result.name}, ${result.country}`}</span>
                </S.ResultItems>
            ))}
        </S.ResultWrapper>
    );
};

export default SearchBar;