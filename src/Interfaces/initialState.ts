/**
 * Implementation of initialState interfaces
 */

export interface IUsers {
  isLoading: boolean;
  userData: Array<IUserData>;
  errorMessage: string;
}

interface IUserData {
  id: string;
  username: string;
  contact: string;
}

export interface IActionType {
  type: string;
  response: any;
  requestInfo: string;
}
