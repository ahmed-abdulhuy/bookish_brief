# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the front-end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm sever`

Runs the api end-points in the development mode.\
Use [http://localhost:4000](http://localhost:4000) to make api calls.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm dev`

Runs both the front-end and the api end-points in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Use [http://localhost:4000](http://localhost:4000) to make api calls.


The page will reload if you make edits.\
You will also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

# Run application on test mode
- Make sure to have a Mysql database wtih the name `books_list`
and user `root`


# run database server
### On terminal
```bash
  docker compose up
  docker exec -it bookish_brief-postgres-1 su root
  createdb bookishdb 
  psql bookishdb
```
```bash
  npx db-migrate up
```
