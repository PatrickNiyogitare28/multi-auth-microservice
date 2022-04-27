# Getting started with Bitbucket app

Technical documentation on how to get started with bitbucket API

## Getting a bitbucket **Auth token**

To get the bitbucket **Auth token** you need to have [an Atlassian](https://atlassian.com) account. click [here](https://id.atlassian.com/login?continue=https%3A%2F%2Fdeveloper.atlassian.com%2F%2Fcloud%2Fbitbucket%2F) to login or create your account.


To get the **Auth Token** open [this link](https://id.atlassian.com/manage-profile/security/api-tokens).

On successfully creating the Auth token copy it and past it under `.env` on env variable **BITBUCKET_AUTH_TOKEN**


![bitbucket auth token](https://github.com/knowbee/stackoverflow-auth-microservice/blob/master/docs/assets/bitbucke-auth-token.png?raw=true)



## Creating a bitbucket oAuth 2.0 App for authentication integration

To create a bitbucket oAuth 2.0 app just visit [this link](https://developer.atlassian.com/console/myapps/) to get started

Click the **Create** button to get started, from the drop down select **oAuth 2.0 integration**


### Create an app 

To create an app :

1. [Add the app name and check the check box to agree to terms](https://developer.atlassian.com/console/myapps/create-3lo-app/)

2. Click create button to confirm

3. Click Create app password.

![demo app](https://github.com/knowbee/stackoverflow-auth-microservice/blob/master/docs/assets/0auth2.0-app.png?raw=true)


Next you open the **App details** section and scroll down to copy the app **client ID** and **secret**

Past the two values to their corresponding environment variables under `.env`

```
 BITBUCKET_CLIENT_ID=
 BITBUCKET_SECRET=
```



