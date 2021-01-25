import http from "axios";
const API_KEY = "14c16d56f2647e61c2faef5355014969"
const API_URL = "https://api.themoviedb.org"
const TOKEN= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGMxNmQ1NmYyNjQ3ZTYxYzJmYWVmNTM1NTAxNDk2OSIsInN1YiI6IjVkMzJlY2E0Y2FhYjZkMGIyOWE2NTkwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w-w1-kqr_jJ2oybG5GaVWIWUBRVj-w2KcuC2RZuJJTs"


class MovieAPI {
  static async baseHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    };
  }

  static baseUrl() {
    return "";
  }

  static get(route, headers, params, timeout = 15000) {
    return this.api("get", route, headers, params, {}, timeout);
  }

  static async api(requestType, route, headers, params, data, timeout = 15000) {
    const host = MovieAPI.baseUrl();
    const url = `${host}${route}`;
    const baseHeaders = await MovieAPI.baseHeaders();

    const requestConfig = {
      headers: headers ? { ...baseHeaders, ...headers } : baseHeaders,
    };

    if (params) {
      requestConfig.params = params;
    }

    http.create();
    http.defaults.timeout = timeout;

    if (requestType === "get") {
      return http[requestType](url, requestConfig)
        .then(response => {
          return checkValidJSON(response);
        })
        .catch(error => {
          logApiErrorToFile(error);
          console.log("error for get", error);
          return Promise.reject(error);
        });
    }
  }
}

export default MovieAPI;

function checkValidJSON(response) {
  if (response.data !== "string") return response;
  return Promise.reject(response);
}

async function logApiErrorToFile(error) {
  const { url, method, data, headers } = error.config || {};
  const { status, data: responseData, headers: responseHeaders = {} } =
    error.response || {};
  console.log(`API Error - Details are below:
  url->${url}\n
  method->${method}\n
  data->${data}\n
  headers->${JSON.stringify(headers)}\n
  status->${status}\n
  response->${JSON.stringify(responseData)}\n
  responseHeaders->${JSON.stringify(responseHeaders)}\n`);
}
