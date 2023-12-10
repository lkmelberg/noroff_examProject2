import { userRoles } from "../../hooks/userRoles";

export const { isCustomer, isManager } = userRoles();
export const name = localStorage.getItem("name");
export const email = localStorage.getItem("email");
export const token = localStorage.getItem("accessToken");
export const avatarURL = localStorage.getItem("avatar");
