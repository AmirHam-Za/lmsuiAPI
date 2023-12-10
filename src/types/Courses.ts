import User from "./User"
export default interface Course {
  uuid: string;
  title: string;
  code: string;
  expired_at: string;
  released_at: string;
  completion_time: string;
  thumb: {
    name: string;
    path: string;
  };
  short_text: string;
  users: User | null;
}