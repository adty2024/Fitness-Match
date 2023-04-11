export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0a607a53f0msha1737701233e39bp1627a1jsn8675096f89cb' ,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0a607a53f0msha1737701233e39bp1627a1jsn8675096f89cb',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}