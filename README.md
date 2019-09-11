# News Portal

This is my project using React(Front-end), Ruby on Rails(backend) and PostgreSQl.

## Setup

1. Install PostgreSQL
2. Install Ruby
3. Install Rails
4. Clone this repository
5. Run these commands
   5.1. Create database

```
rails db:create
```

5.2 Run database migrations for this project

```
rails db:migrate
```

5.3 Populate database

```
rails db:seed
```

5.4 Run local server

```
rails server
```

6. Open the browser in http://localhost:3000

## Deployment

This project is using Heroku as deployment environment, which requires [a Heroku account](https://signup.heroku.com/www-header) and [heroku toolbelt installed](https://toolbelt.heroku.com/).

After install Heroku toolbelt locally, check if it's working properly running these commands in your terminal

```
heroku --version
which heroku
heroku login
```

Also, make sure the Github branch is up-to-date with your code changes. After that run these commands:

```
git push origin master
git push heroku master
```

If you need to clean the database, please access https://data.heroku.com/datastores, to find the project database and click in `Reset database` button

<img width="1436" alt="Screen Shot 2019-08-02 at 12 57 42 am" src="https://user-images.githubusercontent.com/39023533/62304026-8cc5bb00-b4c0-11e9-9a5b-df7fcee077c7.png">

After reset the database, run these commands in your command line:

```
heroku run rails db:migrate
heroku run rails db:seed
heroku open
```

## Demo

The demo page is hosted on Heroku you can access on this link https://news-portal-client.herokuapp.com/#/.

## Screenshots - Front-end

### Homepage

<img src="https://user-images.githubusercontent.com/39023533/64612437-2618b300-d417-11e9-9e52-0f781470bd1f.png" alt="" Width="100%" height=""/>
<img src="https://user-images.githubusercontent.com/39023533/64612615-9293b200-d417-11e9-83bf-b2bf0f088830.png" alt="" Width="100%" height=""/>
<img src="https://user-images.githubusercontent.com/39023533/64612696-bf47c980-d417-11e9-8714-24a3791130de.png" alt="" Width="100%" height=""/>
 
### News Category Page - World  
<img src="https://user-images.githubusercontent.com/39023533/64612780-fa49fd00-d417-11e9-8390-ccf7bde87c0b.png" alt="" Width="100%" height=""/>

### News Category Page - Entertainment

<img src="https://user-images.githubusercontent.com/39023533/64612933-4b59f100-d418-11e9-81c6-72ed6c38eb21.png" alt="" Width="100%" height=""/>

### Authors Page

<img src="https://user-images.githubusercontent.com/39023533/64613152-d1763780-d418-11e9-8ffb-7f055ca0ad02.png" alt="" Width="100%" height=""/>

### Author Page

<img src="" alt="" Width="100%" height=""/>

## Screenshots - Front-end

## Author

_Nilana Rocha (nilanarocha)_

- <http://github.com/nilanarocha>
