import axios from 'axios';

const API_URL = 'https://reqres.in';

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  birthday: Date;
};

type UserRequest = {
  id: number;
  controller?: AbortController;
  data?: Partial<User>;
};

export const getUser = async ({
  id,
  controller,
}: UserRequest): Promise<{data: User; controller?: AbortController}> => {
  const params = controller ? {signal: controller.signal} : {};

  const response = await axios.get(`${API_URL}/api/users/${id}`, params);
  return {data: response.data.data as User, controller};
};

export const patchUser = async ({id, data}: UserRequest & Partial<User>) => {
  const updatedData = data ? data : {};

  const response = await axios.patch(`${API_URL}/api/users/${id}`, updatedData);
  return {data: response.data as User};
};
