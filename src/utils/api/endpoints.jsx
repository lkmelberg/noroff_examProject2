const BASE_URL = "https://api.noroff.dev/api/v1/holidaze";
import { name } from "../Variables";

export const ENDPOINTS = {
  PROFILE: `${BASE_URL}/profiles`,
  AVATAR: `${BASE_URL}/profiles/${name}/media`,
  AUTH_REGISTER: `${BASE_URL}/auth/register`,
  AUTH_LOGIN: `${BASE_URL}/auth/login`,
  VENUES: `${BASE_URL}/venues`,
  BOOKINGS: `${BASE_URL}/bookings`,
};

export default ENDPOINTS;
