
const searchStyle= {
    width: '500px',
    height: '50px',
    borderRadius: '10px',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cde9f7',
    color: 'grey'
}
const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
}
const SearchComponent = () => {
    return (
        <div style={containerStyle}>
            <div style={searchStyle}>Search by name</div>
        </div>
    );
}


export default SearchComponent;

