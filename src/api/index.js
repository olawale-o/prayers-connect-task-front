const BASE_URI = 'http://localhost:5000/api/v1/';

const INIT = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json'
  },
  mode: 'cors',
};

export const post = async (endpoint, payload) => {
  const response = await fetch(`${BASE_URI}${endpoint}`, {
    ...INIT,
    method: 'POST',
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error('Failed to submit request');
  }
  const data = await response.json();
  return data;
};

export const get = async (endpoint, filter) => {
  const response = await fetch(`${BASE_URI}${endpoint}?status=${filter}`);
  if (!response.ok) {
    throw new Error('Failed to fetch request');
  }
  const data = await response.json();
  return data.tasks;
};

export const put = async (endpoint, payload) => {
  const response = await fetch(`${BASE_URI}${endpoint}`, {
    ...INIT,
    method: 'PUT',
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error('Failed to submit request');
  }
  const data = await response.json();
  return data;
};