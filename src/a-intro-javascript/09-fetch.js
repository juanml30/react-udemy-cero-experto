const apiKey = "bInCVccX9En4xphYanuyswA25FSCweOo";

const urlPage = "api.giphy.com/v1/gifs/random";

const request = fetch(`http://${urlPage}?api_key=${apiKey}`);

/* 
VERSION FEA
request
  .then((resp) => {
    resp.json().then((data) => {
      console.log(data);
    });
  })
  .catch(console.warn);
 */
/* VERSION LINDA */
request
  .then((resp) => resp.json())
  .then(({data}) => {
    const {url} = data.images.original
    console.log(url);
    document.body.innerHTML += `<img src="${url}" alt="" />`
    
  }).catch (console.warn)
