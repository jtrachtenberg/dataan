import { getOverdueBooks, Book, User } from './library';

const books: Book[] = [
  {
    title: 'Book 1',
    author: 'Author 1',
    status: 'checked out',
    dueDate: new Date('2023-04-15'),
    user: {
      name: 'User 1',
      email: 'user1@example.com',
    },
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    status: 'available',
  },
];

const overdueBooks = getOverdueBooks(books);
console.log(overdueBooks);
