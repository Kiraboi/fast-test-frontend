// const baseUrl = 'http:127.0.0.1:8000/api/'

const baseUrl =
  process.env.REACT_APP_PROTOCOL +
  "://" +
  process.env.REACT_APP_GATEWAY_HOST +
  ":" +
  process.env.REACT_APP_GATEWAY_PORT +
  "/api/";

// const token = "2a80bed8b8e325c40abf525a5d8caf9e5583ef13"

export const credentialsCheck = (username, password) => {
  const credentials = { username, password };
  const url = `${baseUrl}${"login/"}`;
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getServiceListAll = (token) => {
  const url = `${baseUrl}${"list/post/"}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const sendMail = (to, by, token) => {
  const url = `${baseUrl}${"email/"}${to}${"/"}${by}`;
  console.log(url);
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const getProviderList = (token) => {
  const url = `${baseUrl}${"post/"}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const serviceSave = (title, details, token) => {
  const post = {};
  post["post_title"] = title;
  post["post_details"] = details;
  const url = `${baseUrl}${"post/"}`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(post),
  })
    .then((data) => {
      return data.status;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getFilteredService = (terms, token) => {
  const url = `${baseUrl}${"list/post/?search="}${terms}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};
