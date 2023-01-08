CREATE TABLE machine_learning (
  book_id SERIAL references books(id) ON DELETE CASCADE
);