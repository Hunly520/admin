import request from "@/utils/request";

export const login = (username: string, password: string) => {
  const params = {
    url: '/v1/auth/login',
    method: 'POST',
    data: {
      username,
      password
    }
  };
  return request(params);
}