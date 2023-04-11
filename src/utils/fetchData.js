export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '52fb48fd7dmsh0b71e6ec5aa9659p195552jsn129611c1574a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '52fb48fd7dmsh0b71e6ec5aa9659p195552jsn129611c1574a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}