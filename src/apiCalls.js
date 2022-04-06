const getTricks = () => {
return fetch('http://localhost:3001/api/v1/tricks')
 .then(response => response.json())
 //.then(data => console.log(data))
}

export default getTricks