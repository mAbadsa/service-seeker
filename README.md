# Service Seeker
Service Seeker App that facilitates searching, find an order service provider.

## Live demo :tv: 
[Heroku link , Click here to visit our app]()

## Main problem :new_moon_with_face:
People who are busy and cannot find a service quickly and easily or who want to market their services.

## Solution :bulb:
Make an app to facilitate users reaching the appropriate services and connect with the affordable and good service provider at the right time.



## User Journey :airplane:
### as a customer:
I can sign up in the app by filling the form that lets me enter full details about me to let the people see my profile and contact me and I can see all available services providers, book a provider and contact them with my needs.
### as a provider:
I can register to specify my service, hourly pricing, and extra information, and see all orders from customers with details, accept or reject them, contact them and receive notification (bill/receipt) after complete my work.

## User Stories :open_book:

**As a Customer**
* I can Sign up for the app.
* I can log in to my account.
* I can see all available service providers.
* I can see specific information about any service provider.
* I can order a service provider.
* I can cancel the order as long as the provider hasn't accepted it yet.
* I need to receive notification contains bill/receipt and order state(on change).

**As a service provider**
* I need a Profile to add my information.
    * I can switch my availability.
* I can accept or reject any order.
    * I need to specify the time to arrive before starting my work.
* I can see all orders I have with their status.
    * I can start work when I arrive at the customer location.
    * I can end the service when I finished it.
    * I can pause timers if the work needs multiple days.
* I need to receive my bill and input some information about the service that I did.
* I need to receive notification contains bill/receipt and order state(on change).

## Prototype :art:
[Figma Link](https://www.figma.com/file/4gyWA11DmZOmlnle5mC4TG/hound?node-id=0%3A1)
![prototype image](https://i.imgur.com/awA5aKA.png)




## DATABASE Schema :file_cabinet:
[db digram](https://dbdiagram.io/d/60158d7e80d742080a3878db)
![db image](https://i.imgur.com/umLYRoS.png)

## Getting Started
**1. You can start by cloning the repository on your local machine by running:**

```sh
git clone https://github.com/GSG-G9/service-seeker.git
cd service-seeker
```

**2. Install all of the dependencies:**

```sh
npm run project-setup
```
**3. Environment variables:**
- create ./.env file
- add your Environment variables
```sh
DEV_DATABASE_URL= # PostgreSQL connect
JWT_SECRET_KEY= # Your token Secret key
NODEMAILER_SENDER_EMAIL= # Your email that you will send bills from
SENDER_EMAIL_PASSWORD= # Your email password
```
**4. Start to run it:**

```sh
npm run build  # Building bundle
npm run dev  # Running production server
```

Now the app should be running at [http://localhost:8080](http://localhost:3000)


## Technologies :computer:

#### Front-end :

- ReactJS (Hooks).
- Antd.

#### Back-end :

- Node JS.
- Express.

#### Database :
- PostgreSQL.

## Stretch Goals :goal_net:
* export/print my bill, receive an email containing my bill.
* rate the service/user.
* make a chat for all users.
* user can confirm the order after the provider accepts the order.

## team

### Lead Mentor :sunglasses:
* Mariam Isa

### Team Members :busts_in_silhouette:
* Osama Younis
* Muhammed Abadsa
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

