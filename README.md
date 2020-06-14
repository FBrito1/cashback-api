<h1 align="center">Welcome to callback-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple cashback system api

## Install

```sh
yarn install
```

## Setup Local Environment

- Configure your env keys following the .env.example file on the root directory.
- Configure your ormconfig.json file (on the root directory) following the ormconfig.example.json

```sh
# Running a local database
docker run --name cashbackapipg -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  ## remember to create cashback_api database on your docker running instance
  ## run the following command on your docker running instance for uuid support.
    ## CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`


# Running migrations
yarn typeorm migration:run
```

## Usage

```sh
yarn dev:server
```

## Run tests

```sh
yarn test
```

## Setup logs dashboad (Sentry)

- Create a new free account on: https://sentry.io
- Create a new project for Node platform and get the dsn key
- Configure the SENTRY_DSN_KEY env variable with the dsn key recovered

## API DOCS

- https://documenter.getpostman.com/view/4407813/Szzhee2c?version=latest

## Author

👤 **Fabio Brito**

- Website: https://www.linkedin.com/in/fabio-brito-8052b0151
- Github: [@FBrito1](https://github.com/FBrito1)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/FBrito1/cashback-api/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
