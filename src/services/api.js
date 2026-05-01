import axios from "axios";

export const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

const buildParams = ({ location, form, equipment, page, limit }) => {
  const params = {};
  if (location) params.location = location;
  if (form) params.form = form;
  if (Array.isArray(equipment)) {
    equipment.forEach((key) => {
      params[key] = true;
    });
  }
  if (page) params.page = page;
  if (limit) params.limit = limit;
  return params;
};

// API responds with { total, items }
export const fetchCampers = (filters = {}) =>
  api.get("/campers", { params: buildParams(filters) }).then((r) => ({
    items: r.data?.items ?? [],
    total: r.data?.total ?? 0,
  }));

export const fetchCamperById = (id) =>
  api.get(`/campers/${id}`).then((r) => r.data);
