const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// host root domain 
console.log(myUrl.host);

//host name  does not get port
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);
//serialized query
console.log(myUrl.search);

//parms object
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('yoni', '123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
