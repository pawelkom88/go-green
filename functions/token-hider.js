import fetch from "node-fetch";

export async function handler(event) {
  let statusCode, data;

  let url = `${process.env.API_url}?output=json&maxresults=10&boundingbox=${event.queryStringParameters.bbox}`;

  try {
    const response = await fetch(url, {
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
