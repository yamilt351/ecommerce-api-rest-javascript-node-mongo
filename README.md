# INDEX

- [About this project](#About-this-project)
- [Development Environment Setup](#Development-Environment-Setup)
- [Available Endpoints](#Available-Endpoints)
- [Contribution](#Contribution)
- [Licence](#Licence)

## About this project

This project is a web application developed using Node.js v16.20.1. It follows the Model-View-Controller (MVC) architectural pattern, providing a structured and modular approach to building web applications.

## Development Environment Setup

To set up the development environment for this project, follow these steps:

- [Download Docker Desktop](https://www.docker.com/products/docker-desktop/) & [Docker File](https://hub.docker.com/repository/docker/clamshell6412/ecomerce_res_api/general) (production only)

- Or you can just install Node.js [v16.20.1](https://nodejs.org/download/release/latest-gallium/) ([or a compatible version](https://nodejs.org/es/download/releases)) on your system.
- Clone the project repository using `git clone https://github.com/yamilt351/api-rest.git`
- Install project dependencies using npm or yarn. Run `npm install` or `yarn install` in the project root directory.
- Configure the environment variables required for the project.

```
MONGO=mongodb+srv://USERNAME:PASSWORD@cluster0.4g3ly.mongodb.net/ecomerce?retryWrites=true&w=majority
```

```
JWT_TOKEN=z&&2DbCJa9d3gZkxFwJdE$&hHbRe47KHxAF%&N#qRVx*zVFG$W
```

```
PORT=3000
```

```
STRIPE_TOKEN=sk_text_YourStripeToken

```

- Start the application using `npm run dev` or `yarn run dev` to launch the application.
- Access the application in a web browser using the provided URL or port number.

# Available Endpoints

| User Actions    | Routes                    | Http Verb |
| --------------- | ------------------------- | --------- |
| Sign In         | `/api/users/signIn`       | Post      |
| Sign Up         | `/api/users/signUp`       | Post      |
| User Stats      | `/api/users/stats`        | Get       |
| Find user by Id | `/api/users/find/:userId` | Get       |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#f3eb5112-676b-46c6-89a2-f5dd6b6c0927)

| Products Actions     | Routes                            | Http Verb |
| -------------------- | --------------------------------- | --------- |
| Create Product       | `/api/products/create`            | Post      |
| Get All Product      | `/api/products`                   | Get       |
| Get Product by Tag   | `/api/products/tag`               | Get       |
| Get Product By Query | `/api/products/search`            | Get       |
| Get Product By Id    | `/api/products/:productId`        | Get       |
| Edit Product Info    | `/api/products/update/:productId` | Put       |
| Delete Product       | `/api/products/delete/:productId` | Put       |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#da18f92d-0285-461d-86d8-af8f93f4b079)

| Cart Actions  | Routes               | Http Verb |
| ------------- | -------------------- | --------- |
| Create Cart   | `/api/carts/create`  | Post      |
| Get All Carts | `/api/carts/getAll`  | Get       |
| Get user Cart | `/api/carts/:userId` | Get       |
| Edit Cart     | `/api/carts/:cartId` | Put       |
| Delete Cart   | `/api/carts/:cartId` | Delete    |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#30fad45b-31df-4ebc-a672-1a16c89c1267)

| Purchases Actions     | Routes                              | Http Verb |
| --------------------- | ----------------------------------- | --------- |
| Create Purchase       | `/api/purchases/create`             | Post      |
| Payment               | `/api/purchases/payment`            | Post      |
| Get Monthly Purchases | `/api/purchases/monthly`            | Get       |
| Get All Purchase      | `/api/purchases/getAll`             | Get       |
| Get user Purchase     | `/api/purchases/:userId`            | Get       |
| Edit Status Purchase  | `/api/purchases/status/:purchaseId` | Put       |
| Delete Purchase       | `/api/purchases/:purchaseId`        | Delete    |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#31c36708-d610-4480-8c8a-628bb32dcfde)

| Comments Actions      | Routes                           | Http Verb |
| --------------------- | -------------------------------- | --------- |
| Create Comments       | `/api/comments/create/productId` | Post      |
| Get Products Comments | `/api/comments/getAll/productId` | Get       |
| Delete Comments       | `/api/comments/delete/commentId` | Delete    |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#31c36708-d610-4480-8c8a-628bb32dcfde)

| Responses Actions      | Routes                            | Http Verb |
| ---------------------- | --------------------------------- | --------- |
| Create Responses       | `/api/responses/create/commentId` | Post      |
| Get Comments Responses | `/api/responses/getAll/commentId` | Get       |
| Delete Responses       | `/api/responses/responseId`       | Delete    |

[Postman Documentation](https://documenter.getpostman.com/view/21643141/2s93sXcaLf#31c36708-d610-4480-8c8a-628bb32dcfde)

## Tests

- The aplication was tested with [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest)

```
npm run test

```

# Contribution.

-  Read The Documentation
-  Fork The Development Branch
-  Make Atomic Changes , keep them small keep them easy
-  You have to provide Evidences in your PRs (Postman requests,covering  much edge cases as you can)
-  Make `git pull` before create your PR

# Licence
The Project is GPL Project 
