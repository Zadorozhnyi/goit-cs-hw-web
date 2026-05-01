import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "../../services/api.js";

export const PAGE_LIMIT = 4;

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async ({ page, filters }, { rejectWithValue }) => {
    try {
      const { items, total } = await fetchCampers({
        ...filters,
        page,
        limit: PAGE_LIMIT,
      });
      return { items, total, page };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchCamperById(id);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
