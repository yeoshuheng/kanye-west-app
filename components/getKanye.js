function getKanye() {
    return fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((responseJson) => {
        setQuote(responseJson.quote);
      })
      .catch((err) => {
        console.log(err);
      });
  }

export default getKanye