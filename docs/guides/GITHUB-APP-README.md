# Github App guide 

To get started with using the github API you need to have the bellow credential items.

- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET

To have the above credentials you need to signup with github apps. That's to create a github application.

## Creating a github application

To create a new github application, open the link [https://github.com/settings/apps](https://github.com/settings/apps) and click  **New Github App** button.

![create-github-app](https://github.com/knowbee/stackoverflow-auth-microservice/blob/master/docs/assets/create-git-app.png?raw=true)


- Provide a github application name **stackexchange-microservice**

- Any description 

- Add **Homepage URL** to be [http://127.0.0.1:5000](#) , since our app is running on port 5000 and on localhost

- Add the **Callback URL** [http://127.0.0.1:5000/api/v1/auth/github/callback](#)

- Other fields can be left as default no worries.

- Something else to take care of, make sure you uncheck the **Active** option in **Webhook** option. otherwise you'll be requested to provide a webhook url.

  
  Uncheck **Active option** to disable that option

![configuring the app](https://github.com/knowbee/stackoverflow-auth-microservice/blob/master/docs/assets/config-git-app.png?raw=true)


## Generating the application client secret

Now, on successfully creation of a github application you'll automatically be redirected to the application dashboard.

You can copy the provided **client ID**.

Click on the **Generate a new client secret** to have the client secret as well.

After all update the `.env` with **GITHUB_CLIENT_ID** and **GITHUB_CLIENT_SECRET** with corresponding values.

Now you can successfully run the app.

![generating secret](https://github.com/knowbee/stackoverflow-auth-microservice/blob/master/docs/assets/generate-secret.png?raw=true)


## Using the github auth on the app


To trigger github login on the app just run the app and call the api at
`localhost:5000/api/v1/auth/github/`


