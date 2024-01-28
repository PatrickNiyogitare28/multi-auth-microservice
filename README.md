# Stackoveflow Auth Microservice

A nodejs service consuming the Stackoverflow API

## Getting started with Stack Exchange API

To be able to use the stackexchange api, one should have StackExchange credentials listed in the .env

- STACKEXCHANGE_CLIENT_ID
- STACKEXCHANGE_CLIENT_SECRET
- STACKEXCHANGE_APPS_KEY

To get the above credentials, signup on [StackExchange APi](https://api.stackexchange.com/)

Read the [Stack Exchange App Setup Guid](https://github.com/PatrickNiyogitare28/multi-auth-microservice/blob/master/docs/guides/STACK-EXCHANGE-APP-README.md) to be able to configure the app

## Getting started with Github API

To be able to access the github api you need the bellow credentials

GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET

Use the [this documentation guid](https://github.com/PatrickNiyogitare28/multi-auth-microservice/blob/master/docs/guides/GITHUB-APP-README.md) to be able to create a github application and have the API credentials to use in the app

## Getting started with Bitbucket API

To access the bitbucket api. A bit bucket application credentials are required.
Follow the guide on [here](https://github.com/PatrickNiyogitare28/multi-auth-microservice/blob/master/docs/guides/BITBUCKET-README.md) to create bitbucket app and generate a bitbucket credentials

## Getting started

`git clone https://github.com/knowbee/stackoverflow-auth-microservice.git`

`cd node-boilerplate`

`npm install`

`npm start`


### Building

`npm run build`

### Testing

`npm test`

## Running in Docker

Building a production docker image
```sh
$ docker build . -t <docker-username>/app-name
# docker build . -t knowbee/stackoverflow-auth-microservice/
```

Running the production docker image in a container
```sh
$ docker run -p <app-port>:<localhost-port> [image-name or image-id]
# docker run -p 5000:5000 knowbee/stackoverflow-auth-microservice/
```


## Requirements

- [Node.js®](https://nodejs.org/en/)

### Recommended

- [Visual Studio Code](https://code.visualstudio.com/)

  There are included vscode specific settings included to streamline things.

  [See Below](#visual-studio-code).

#### Windows-specific

- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

  Using WSL on Windows is just a smoother developer experience.

## Includes

- [TypeScript](https://www.typescriptlang.org/)

- [ESLint](https://eslint.org/)

- [typescript-ioc](https://github.com/thiagobustamante/typescript-ioc)

  IoC container for typescript.

- [module-alias](https://github.com/ilearnio/module-alias)

  Allows your transpiled code to actually make use of the `paths` section of your `tsconfig.json` file.

- [Mocha](https://mochajs.org/)

  For testing.

- [Chai Assertion Library](https://www.chaijs.com/)

  Assertion library.

## Config files

### `eslintrc.json`

Has all the rules/config for ESLint.

### `mocharc.jsonc`

Config settings for mocha when running it from the command line.

- `ts-node/register` - for compilation.

- `module-alias/register` - for path alias recognition.

### `package.json`

#### `scripts`

- `clean` - removes `dist` folder.

- `build` - runs `clean` and builds app.

- `start` - cleans, builds, and starts app.

- `test` - runs `mocha` with settings in `mocharc.jsonc`.

#### `_moduleAliases`

Needed for `module-alias` package. Should match keys in `paths` of `tsconfig.json` as such (note the lack of wildcard in `package.json`):

`package.json`

```json
{
  // ...
  "_moduleAliases": {
    "@service": "dist/service"
    // ...
  }
  // ...
}
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "@service/*": ["./src/service"]
      // ...
    }
    // ...
  }
}
```

### `tsconfig.json`

`include` key is for including any source files that you want VSCode to recognize.

#### `tsconfig-build.json`

Used only for build to exclude the `test` folder in compilation.

## Visual Studio Code

After cloning and prior to opening in Visual Studio Code, go ahead and run the install and build commands to prevent it barking at you.

`npm install`

`npm run build`

Once you have the folder open in Visual Studio Code, it will prompt you to download some recommended extensions... Do that...

### Recommended Extensions

#### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Code linter for TypeScript and JavaScript

#### [Mocha Sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar)

Sidebar test runner for Mocha Tests
