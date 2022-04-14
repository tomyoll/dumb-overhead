import axios from "axios";

class Api {
  constructor() {
    this.loginUrl = "/login";
  }

  post({ path = "", data = {} }) {
    return this._send({ method: "POST", path, data });
  }

  put({ path = "", data = {} }) {
    return this._send({ method: "PUT", path, data });
  }

  get({ path = "", data = {}, params = {}, responseType = "json", fullResponse = false }) {
    return this._send({ method: "GET", path, data, params, responseType, fullResponse });
  }

  delete({ path = "" }) {
    return this._send({ method: "DELETE", path });
  }

  async _send({
    method = "GET",
    path = "",
    data = {},
    params = {},
    responseType = "json",
    fullResponse = false
  }) {
    const headers = {};

    const token = localStorage.getItem("access");

    if (token) {
      headers.jwt = `Bearer ${token}`;
    }

    try {
      const response = await axios({
        method,
        url: `http://localhost:4000${path}`,
        params,
        data,
        headers,
        responseType
      });

      if (fullResponse) {
        return response;
      }

      if (response && response.data) {
        return response.data;
      }

      return null;
    } catch (error) {
      if (error.response.status === 401) {
        window.location.href = this.loginUrl;
      }

      return { error: error.response.data.error };
    }
  }
}

export default new Api();
