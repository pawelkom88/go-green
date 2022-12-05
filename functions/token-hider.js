import fetch from "node-fetch";

export async function handler() {
  let statusCode, data;

  const URL = `${process.env.API_URL}?output=json&countrycode=GB&maxresults=10`;

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.OPEN_CHARGE_MAP_API_KEY,
      },
    });

    data = await response.json();
    statusCode = 200;
  } catch (err) {
    statusCode = err.statusCode || 500;
    data = { error: err.message };
  }

  return {
    statusCode,
    body: JSON.stringify(data),
  };
}
