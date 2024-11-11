import axios from "axios";

export const getAllCountries = async (req, res) => {
  try {
    const url = process.env.URL_ALL_COUNTRIES;

    const countries = await axios.get(url);

    return res.status(200).json({
      countries: countries.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFlag = async (req, res) => {
  try {
    const { country } = req.body;
    const url = process.env.URL_FLAG;

    const flag = await axios.post(url, { country });

    return res.status(200).json({
      flag: flag.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const population = async (req, res) => {
  try {
    const { country } = req.body;
    const url = process.env.URL_POPULATION;

    const population = await axios.post(url, { country });

    return res.status(200).json({
      population: population.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const infoOneCountry = async (req, res) => {
  try {
    const { code } = req.params;
    const url = process.env.URL_ONE_COUNTRY;

    const info = await axios.get(`${url}/${code}`);

    return res.status(200).json({
      country: info.data,
    });
  } catch (error) {
    console.log(error);
  }
};
