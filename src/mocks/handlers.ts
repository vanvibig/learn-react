// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import users from "./users.json";
import users2 from "./users2.json";

export const handlers = [
  http.get("/api/users/v1", () => {
    return HttpResponse.json(users);
  }),
  http.get("/api/users/v2", () => {
    return HttpResponse.json(users2);
  }),
];
