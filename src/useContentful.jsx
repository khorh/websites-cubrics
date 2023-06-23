import { createClient } from "contentful";

export const client = createClient({
  space: "8ux9r9ey3jdc",
  accessToken: process.env.REACT_APP_API_KEY,
});
