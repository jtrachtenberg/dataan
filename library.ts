import { Book, User } from './book';
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  // Configure your email service provider here
});

export const getOverdueBooks = (books: Book[]) => {
  const today = new Date();
  const overdueBooks: Book[] = [];

  books.forEach((book) => {
    if (book.status === 'checked out' && book.dueDate && book.dueDate < today) {
      overdueBooks.push(book);
      sendOverdueEmail(book.user!);
    }
  });

  return overdueBooks;
};

const sendOverdueEmail = (user: User) => {
  const mailOptions = {
    from: '{EMAIL}',
    to: user.email,
    subject: 'Overdue Book Notification',
    text: `Hello ${user.name}, you have an overdue book. Please return it as soon as possible.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent to ${user.email}: ${info.response}`);
    }
  });
};
