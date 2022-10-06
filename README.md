# Gratis

Deployed At: [https://gratis-means-free.netlify.app/](https://gratis-means-free.netlify.app/)

### Created By Isak Kallenbach

#### Technologies Used: HTML5, CSS3, Javascript, React

Gratis is an app that lists only the FREE games from both the Steam and GOG (Good Old Gaming) online stores. Clicking on a game's card will bring you to its store page so you can get it for yourself. There are also options to filter results by genre and/or store.

Who doesn't love free games!? I know I do, so I made the app for the same reason someone might use it: Play games and save money!

It was also a fun reason to do a much more complicated React/Rails project than a todo app and I learned a ton getting it working.


## Instructions

#### Server

The following commands are meant to be typed into the terminal at the server's directory.

##### 1. Use Ruby Version 3.0.1

Because of some of the dependencies, it is necessary to be on the right verison of Ruby. Check to make sure you're using Ruby 3.0.1. You can check what version you're on by typing **ruby -v** in the terminal.

##### 2. Install Dependencies

Run **bundle install** in the terminal to install all dependencies needed for the server to run.

##### 3. Seed Database (optional)

Run **rails db:seed** in the terminal if you want to update and/or add new games. Because of the fact Steam limits requests to its API, I created a mechanism that saves my "place" in Steam's API (this code is in the seeds.rb file). There are still many games in the API to run through.

##### 4. Start Server

Run **rails s** in the terminal to start the server listening on [http://localhost:3000](http://localhost:3000). *Note: You will need to change the games and genres fetch statements in the GamesContainer.js file in the client/src folder to http://localhost:3000/games and http://localhost:3000/genres, respectively.*

#### Client

The following commands are meant to be typed into the terminal at the client's directory.

##### 1. Install Dependencies

Run **npm install** in the terminal to install all dependencies needed for the client to run.

##### 2. Start Client

Run **PORT=4000 npm start** in the terminal to open the client at [http://localhost:4000](http://localhost:4000). If the server is listening on [http://localhost:3000](http://localhost:3000) then you should see the list of games.

## Future Goals

#### 1. Add more stores like Origin and Epic

If you have any tips on how to go about achieving any of these goals or any suggestions on what I should change/add/remove on the app, feel free to let me know.
<br>

#### My Links:
[Personal Portfolio](https://isakkallenbach.netlify.app/)
<br>
[Github](https://github.com/kallenbach13)