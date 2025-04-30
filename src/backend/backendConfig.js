export const backendURL = "http://127.0.0.1";
export const backendPort = 5500;

export const REST_Endpoints = {
  students: "/students",
};

// ------------- Functions that can be used to construct url

export function getUrl(resourceName) {
  return `${backendURL}:${backendPort}${REST_Endpoints[resourceName]}`;
}

export function postURL(resourceName) {
  return `${backendURL}:${backendPort}${REST_Endpoints[resourceName]}`;
}

export function deleteURL(resourceName, resourceId) {
  return `${backendURL}:${backendPort}${REST_Endpoints[resourceName]}/${resourceId}`;
}

export function patchURL(resourceName, resourceId) {
  return `${backendURL}:${backendPort}${REST_Endpoints[resourceName]}/${resourceId}`;
}
