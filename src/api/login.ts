import request from "@/utils/request";


export const login = async (username: string, password: string) => {
  return request.post('/auth/login', {
    username,
    password
  });
}