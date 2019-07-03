import { User } from '../model/user';

export interface UserResponse {
  user: User;
  token: string;
}
