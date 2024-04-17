const APIService = async (textInput: String, SetData: any) => {
  const URL = `https://api.api-ninjas.com/v1/facts?limit=${textInput}`;
  const APIKEY = '9QH2ATe+3PchHaLFoKGEUQ==2IpeTOXd4Pj1jF4r';
  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': APIKEY,
      },
    });
    const finalResponse = await response.json();
    SetData(finalResponse);
  } catch (error) {
    console.error(error);
  }
};

export default APIService;
