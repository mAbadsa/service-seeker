BEGIN;
DROP TABLE IF EXISTS users,
providers,
ordes_request,
orders,
notification CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password text NOT NULL,
    name VARCHAR(55) NOT NULL,
    mobile VARCHAR(255) NOT NULL,
    avatar TEXT,
    location VARCHAR(255) NOT NULL,
    role VARCHAR(55) DEFAULT 'user'
);
CREATE TABLE providers (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    bio TEXT NOT NULL,
    price_houer FLOAT NOT NULL,
    availability boolean DEFAULT true,
    rating INTEGER DEFAULT 100
);
CREATE TABLE ordes_request (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    provider_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    decription TEXT NOT NULL,
    state VARCHAR(55) DEFAULT 'pending',
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE orders (
    id SERIAL PRIMARY KEY NOT NULL,
    ordes_request_id INTEGER REFERENCES ordes_request(id) ON UPDATE CASCADE NOT NULL,
    start_date TIMESTAMP,
    pasued_date TIMESTAMP,
    state VARCHAR(55),
    arrive_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    houer_number INTEGER,
    resources_price FLOAT,
    total_bill_price FLOAT
);
CREATE TABLE notification (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    decription TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
COMMIT;