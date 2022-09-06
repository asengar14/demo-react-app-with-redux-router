/**
 *  API URL List
 */
export const requestPayload = {
  search: (term: string, page: number) => {
    return `search?term=${term}&page=${page}`;
  },
  login: (loginPayload: any) => {
    return loginPayload;
  }
};

/**
 *  API Names
 */
export const serviceName = {
  search: "search",
  login: "playground/get_user"
};