export interface Book {
  title: string;
  author: string;
  status: 'available' | 'checked out';
  dueDate?: Date;
  user?: User;
}
