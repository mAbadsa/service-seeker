# Service Seeker
Service Seeker App that facilitates searching, find an order service provider.

## Live demo :tv: 
[Heroku link, Click here to visit our app](https://service-seeker-2.herokuapp.com/)
* Use these credientials:

    ```hs
    email: service_provider@gmail.com
    password: 123456789
    ```


## Main problem :new_moon_with_face:
Busy people cannot find a service quickly and easily or service providers market their services.

## Solution :bulb:
Make an app to facilitate users reaching the appropriate services and connect with the affordable and good service provider at the right time.



## User Journey :airplane:
### as a customer:
I can sign up in the app by filling the form that lets me enter full details about me to let the people see my profile and contact me and I can see all available services providers, book a provider and contact them with my needs.
### as a provider:
I can register to specify my service, hourly pricing, and extra information, and see all orders from customers with details, accept or reject them, contact them and receive notification after completing my work.

## User Stories :open_book:

**As a Customer**
* I can Sign up for the app.
* I can log in to my account.
* I can see all available service providers.
* I can see specific information about any service provider.
* I can order a service provider.
* I can cancel the order as long as the provider hasn't accepted it yet.
* I need to receive an email that contains the bill/receipt and order state.

**As a service provider**
* I need a Profile to add my information.
    * I can switch my availability.
* I can accept or reject any order.
    * I need to specify the time to arrive before starting my work.
* I can see all orders I have with their status.
    * I can start work when I arrive at the customer location.
    * I can end the service when I finish it.
    * I can pause timers if the work needs multiple days.
* I need to receive my bill and input some information about the service that I did.
* I need to receive an email that contains the bill/receipt and order state.

## Prototype :art:
[Figma Link](https://www.figma.com/file/4gyWA11DmZOmlnle5mC4TG/hound?node-id=0%3A1)
![prototype image](https://i.imgur.com/awA5aKA.png)




## DATABASE Schema :file_cabinet:
[db digram](https://dbdiagram.io/d/60158d7e80d742080a3878db)
![db image](https://i.imgur.com/umLYRoS.png)


## Technologies :computer:

#### Front-end :

- ReactJS (Hooks).
- Antd.

#### Back-end :

- Node JS.
- Express.

#### Database :
- PostgreSQL.

## Getting Started 📣
**1. You can start by cloning the repository on your local machine by running:**

```sh
git clone https://github.com/GSG-G9/service-seeker.git
cd service-seeker
```

**2. Install all of the dependencies:**

```sh
npm run project-setup
```
**3. Database Setup: 📋**

1. If you have pgcli skip this step.

   - Install PostgreSQL database
   - Alongside pgcli
   - [instructions on how to install pgcli](https://www.pgcli.com/install)

2. Open your terminal, run pgcli, navigate through the project to those paths: 
    
    ```
    ./server/src/database/config/databaseConfig.sql
    ./server/src/database/config/build.sql
    ./server/src/database/config/fakeData.sql
    ```

3. Copy each file path and perform the following command for each file:

    ```
    \i <paste your copied path to the file>
    ```



**4. setup Cloudinary ⭐**
* You should login to [Cloudinary](https://cloudinary.com/) Account.
* You will gain [Cloud_Name], [Cloudinary_KEY], [Cloudinary_SECRET] environmental variables needed to upload images to database.



**5. Environment variables:🔑**
- create ./.env file
- add your Environment variables
    ```sh
    DEV_DATABASE_URL= # Your development PostgreSQL connect
    DATABASE_URL= # Your production PostgreSQL connect
    JWT_SECRET_KEY= # Your token Secret key
    NODEMAILER_SENDER_EMAIL= # Your email that you will send bills from
    SENDER_EMAIL_PASSWORD= # Your email password
    CLOUDINARY_API_KEY= # Your [Cloudinary_KEY]
    CLOUDINARY_API_SECRET= # Your [Cloudinary_SECRET]
    ```
**6. run the app locally:🔌**

```sh
npm run run-both
```

Now the app should be running at [http://localhost:3000](http://localhost:3000)


## Stretch Goals :goal_net:
* Export/print my bills and support payment methods inside our app.
* Rate the service/user.
* Make a chat for all users.
* View the service providers on the map.


## Team

### Lead Mentor :sunglasses:
* Mariam Isa

### Team Members :busts_in_silhouette:
* Osama Younis
* Muhammad Al'abadsa
* Ahmed Eid
* Zein Jendeya 
 

## Resources :mag:
* [Node Js](https://nodejs.org/en/)
* [Express Framework](https://expressjs.com/)
* [Yup library](https://github.com/jquense/yup) 
* [React Library](https://reactjs.org/)
* [Cloudinary](https://cloudinary.com/)
* [Ant Design](https://ant.design/)
* [moment](https://momentjs.com/)
* [nodemailer](https://nodemailer.com/)

