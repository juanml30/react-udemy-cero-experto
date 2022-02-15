const getImagen = async () => {
  try {
    const apiKey = "bInCVccX9En4xphYanuyswA25FSCweOo";

    const urlPage = "api.giphy.com/v1/gifs/random";

    const response = await fetch(`http://${urlPage}?api_key=${apiKey}`);

    const { data } = await response.json();

    const { url } = data.images.original;

    console.log(url);

    document.body.innerHTML += `<img src="${url}" alt="" />`;
  } catch (error) {
    console.error(error);
  }
};

getImagen();
