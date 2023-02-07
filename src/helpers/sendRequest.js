export const sendRequest = async (url, type, data) => {
  if (type === "POST" || type === "PUT" || type === "PATCH") {
    const respons = await fetch(url, {
      method: type,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const resuly = await respons.json();
    return resuly;
  }

  if (type === "GET" || type === "DELETE") {
    const respons = await fetch(url, {
      method: type,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const resuly = await respons.json();
    return resuly;
  }
};
