# Stack Exchange APP Guid

To successfully consume [StackExchange] Api, one should have the basic stack exchange credentials as listed under `.env.example`

- STACKEXCHANGE_CLIENT_ID

- STACKEXCHANGE_CLIENT_SECRET

- STACKEXCHANGE_APPS_KEY

## How to get [StackExchange] credentials

**Step 1  Signup for [StackExchange] :** If you have a [stackoverflow](https://stackoverflow.com/) account you don't need this step you can simply go on [StackExchange] and continue with your account to be able to use the API

**Step 2 Create a stackoverflow APP** : You need to create an app,  Land on [StackExchange] under your apps

Creating an app it's only clicking on **Register For An App Key**

![create stackexhange app](https://github.com/knowbee/stackoverflow-auth-microservice/blob/master/docs/assets/create-app.png?raw=true)

### Registering for an app

Add an OAuth Domain which is your testing domain, for our case it's going to be **127.0.0.1**

Add an Applicatoin website, which is going to be the domain of the app together with the port on which the app is running on

For our case the app website is **127.0.0.1:5000**

For Application Icon is optional, let's leave it out.

Refer to the image below, it's going to tell more.

> Make sure you check the option **Enable Client Side OAuth Flow**
> The description is also required make sure you add some description

![register stackexchange app](https://github.com/knowbee/stackoverflow-auth-microservice/blob/master/docs/assets/register-app.png?raw=true)


**Step 3 copy the credentials** : After all the above click the **Register App** Button

You're going now to be landed on the page with the basic app credentials

Copy the `.env.example` file content into a new `.env` file and fill the environment variables with relevant provided credentials.

On this step you have all our [StackExchange] App credentials.

- STACKEXCHANGE_CLIENT_ID

- STACKEXCHANGE_CLIENT_SECRET

- STACKEXCHANGE_APPS_KEY


[StackExchange]: https://api.stackexchange.com/