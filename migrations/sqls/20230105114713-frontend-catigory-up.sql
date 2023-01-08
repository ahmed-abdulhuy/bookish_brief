CREATE TABLE frontend_catigory (
  book_id SERIAL references books(id) ON DELETE CASCADE
);