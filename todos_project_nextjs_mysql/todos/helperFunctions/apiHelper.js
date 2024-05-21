import axios from "axios";

const baseUrl = "http://localhost:3000/api";

export const createTodoApi = async (todo) => {
  try {
    const response = await axios.post(`${baseUrl}/create`, todo);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTodosApi = async () => {
  try {
    const response = await axios.get(`${baseUrl}/todo`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodoApi = async (id) => {
  try {
    await axios.delete(`${baseUrl}/delete`, { data: { id } });
  } catch (error) {
    throw error;
  }
};

export const fetchTodoByIdApi = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/todo/${id}`);
    return response.data[0];
  } catch (error) {
    throw error;
  }
};
// http://localhost:3000/api/todo/${id}

export const updateTodoApi = async (todo) => {
  try {
    await axios.put(`${baseUrl}/update`, todo);
  } catch (error) {
    throw error;
  }
};
