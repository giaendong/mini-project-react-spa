// Simple API wrapper

const API_URL = 'https://jsonplaceholder.typicode.com';

// Custom API error to throw
function ApiError(message, data, status) {
  let response = null;
  let isObject = false;

  // We are trying to parse response
  try {
    response = JSON.parse(data);
    isObject = true;
  } catch (e) {
    response = data;
  }

  return {
    response,
    message,
    status,
    toString: () => {
      return `${ this.message }\nResponse:\n${ isObject ? JSON.stringify(this.response, null, 2) : this.response }`;
    },
  };
}

// API wrapper function
const fetchResource = (path, page, userOptions = {}) => {
  // Define default options
  const defaultOptions = {};

  // Define default headers
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const options = {
    // Merge options
    ...defaultOptions,
    ...userOptions,
    // Merge headers
    headers: {
      ...defaultHeaders,
      ...userOptions.headers,
    },
  };

  let pagination = '';
  if (page) {
    pagination = `?_page=${ page }`;
  }
  // Build Url
  const url = `${ API_URL }/${ path }${ pagination }`;

  // Detect is we are uploading a file
  const isFile = typeof window !== 'undefined' && options.body instanceof File;

  // Stringify JSON data
  // If body is not a file
  if (options.body && typeof options.body === 'object' && !isFile) {
    options.body = JSON.stringify(options.body);
  }

  // Variable which will be used for storing response
  let response = null;

  return fetch(url, options)
    .then(responseObject => {
      // Saving response for later use in lower scopes
      response = responseObject;

      // HTTP unauthorized
      if (response.status === 401) {
        // Handle unauthorized requests
        // Maybe redirect to login page?
      }

      // Check for error HTTP error codes
      if (response.status < 200 || response.status >= 300) {
        // Get response as text
        return response.text();
      }

      // Get response as json
      return response.json();
    })
    // "parsedResponse" will be either text or javascript object depending if
    // "response.text()" or "response.json()" got called in the upper scope
    .then(parsedResponse => {
      // Check for HTTP error codes
      if (response.status < 200 || response.status >= 300) {
        // Throw error
        throw parsedResponse;
      }
      if (response.headers.get('Link')) {
        const headers = response.headers.get('Link');
        const header = {};
        const heads = headers.replace(/</g, '').replace(/>/g, '').replace(/"/g, '').replace(/ /g, '')
          .split(',');
        heads.forEach(el => {
          const uri = el.substring(0, el.indexOf(';'));
          const pageNum = uri.substring(uri.indexOf('?_page=') + 7);
          const type = el.substring(el.indexOf('rel=') + 4);
          if (type === 'first') {
            header[type] = pageNum;
          } else if (type === 'prev') {
            header[type] = pageNum;
          } else if (type === 'next') {
            header[type] = pageNum;
          } else if (type === 'last') {
            header[type] = pageNum;
          }
        });
        const resp = { ...header, results: parsedResponse };
        return resp;
      }

      // Request succeeded
      return parsedResponse;
    })
    .catch(error => {
      // Throw custom API error
      // If response exists it means HTTP error occured
      if (response) {
        throw ApiError(`Request failed with status ${ response.status }.`, error, response.status);
      } else {
        throw ApiError(error.toString(), null, 'REQUEST_FAILED');
      }
    });
};

function getData(page) {
  return fetchResource('posts', page);
}

export default {
  getData,
};
