export interface Profile {
  [x: string]: any;
  id: number;
  username: string;
  avatarUrl: string | null;
  subscribersAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
  description: string;
}
