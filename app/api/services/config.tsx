/* import { cookies } from "next/headers";
const cookieStore = cookies();

const token = cookieStore.get("access-token"); */

export const config = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImY2MTc5M2E0LTZiZDEtNGEyNi00NDMwLTA4ZGM3MTFmMzNiOCIsImp0aSI6ImQyOGIxZGE0MzZiYzQ4YzQ5MDE3ZWFlNTk0NmYwN2NhIiwiRGF0YSI6IntcIklkXCI6XCJmNjE3OTNhNC02YmQxLTRhMjYtNDQzMC0wOGRjNzExZjMzYjhcIixcIk5hbWVcIjpcIjQzOTM4ODgzODM5XCIsXCJSb2xlXCI6XCJQYXJ0aWNpcGFudGVcIixcIkNsYWltXCI6e1wiVHlwZVwiOlwiQXRsZXRhSWRcIixcIlZhbHVlXCI6XCIxMTYyOTIxXCJ9LFwiUmVxdWlyZWRSZXF1aXJlc1R3b0ZhY3RvclwiOmZhbHNlfSIsIm5iZiI6MTcxNTM2NTgwMywiZXhwIjoyMDMwNzI1ODAzLCJpYXQiOjE3MTUzNjU4MDMsImlzcyI6IkZTTCIsImF1ZCI6IkZTTCJ9.mZn6EDnNsPQ5yazxb_6kAW1UOA8knsyhwHYzZ78nDwY`,
  },
};
