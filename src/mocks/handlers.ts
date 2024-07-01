// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import users from "./users.json";

export const handlers = [
  http.get("/api/users/v1", () => {
    return HttpResponse.json(users);
  }),
];
