class API{
  #secure;
  constructor(url,method='GET){
    this.utl=url;
    this.method=method;
    this.#secure=url.startsWith('https');;
  }
  isSecure(){
    return this.url.startsWith('https');
  }
updateURL(newUrl){
  this.url=newUrl;
}
  }
module.exports = { API }

const s = new API('http://api. com/api/hello')
console. log(s. isSecure()) // false

s.updateUrl('https://api. com/api/hello')
console. log(s. isSecure()) // true

console.log(s.url) // https://api. com/api/hello

console.log(s.method) // GET

console.log(s.secure) // undefined (because private field)
