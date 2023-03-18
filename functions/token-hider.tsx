import { ExtendedPOIDetails } from "domain/api-types";
import fetch from "node-fetch";

export async function handler(event: any) {
  let statusCode: string | number;

  let data;

  let url = `${process.env.API_URL}?output=json&maxresults=${event.queryStringParameters.maxresults}&boundingbox=${event.queryStringParameters.bbox}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.OPEN_CHARGE_MAP_API_KEY as string,
      },
    });

    data = await response.json();
    statusCode = 200;
  } catch (err: any) {
    statusCode = err.statusCode || 500;
    data = { error: err.message };
  }

  return {
    statusCode,
    body: JSON.stringify(data),
  };
}
