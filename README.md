# News Portal Client

This is The News Portal website. It simulates a real news portal like CNN, BCC and
others. 

## Running the project locally

This project depends of [news-portal-server](https://github.com/nilanarocha/news-portal-server) to be running in your local environment. So you need to follow the described steps in [this link](https://github.com/nilanarocha/news-portal-server/blob/master/README.md) for run that locally.

### Tech stack

1. React JS(Front-end)
2. React-Bootstrap

## Setup (Front-end)

1. Clone this repository
2. Run these commands

   2.1 Install all modules listed as dependencies in `package.json

```
npm install
```

2.2 Run local client

```

npm run start
```

3. Open the browser in http://localhost:3000

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

If you prefer, you can just run `./deploy.sh`.


## Demo

The demo page is hosted on Heroku you can access on this links https://news-portal-client.herokuapp.com/#/, https://news-portal-server-api.herokuapp.com/authors.

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


## Author

_Nilana Rocha (nilanarocha)_

- <http://github.com/nilanarocha>
