import React from "react";
import { CheckUserRole } from "../profile/CheckUserRole";

export const { isCustomer, isManager } = CheckUserRole();
export const name = localStorage.getItem("name");
export const email = localStorage.getItem("email");
export const token = localStorage.getItem("accessToken");
export const avatarURL = localStorage.getItem("avatar");
