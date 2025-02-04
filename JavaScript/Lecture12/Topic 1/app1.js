const url3 = "https://icanhazdadjoke.com/";

async function  getJokes() {
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url3, config);
        console.log(res.data.joke);
    } catch(e){
        console.log(e);
    }
}