export interface ITask {
  _id?: string;
  title: string;
  deadline: string;
  description: string;
  keynotes?: string[];
  cover_image?: string;
  done: boolean;
}
