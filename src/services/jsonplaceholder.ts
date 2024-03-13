import { User } from "../types";

const url = "https://jsonplaceholder.typicode.com/users";

export const getUserById = async (id: number | string): Promise<User | null> => {
  try {
    const response = await fetch(`${url}/${id}`, { cache: "force-cache" });
    if (!response.ok) {
      throw new Error(`Unable to Fetch Data, Please check URL or Network connectivity!`);
    }
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}