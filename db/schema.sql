-- Address Table
CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    street VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip VARCHAR(10) NOT NULL
);

-- Venue Table
CREATE TABLE venue (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address_id INT NOT NULL,
    capacity INT NOT NULL,
    FOREIGN KEY (address_id) REFERENCES address(id)
);

-- Hall Type Table
CREATE TABLE hall_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Hall Table
CREATE TABLE hall (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type_id INT NOT NULL,
    venue_id INT NOT NULL,
    FOREIGN KEY (type_id) REFERENCES hall_type(id),
    FOREIGN KEY (venue_id) REFERENCES venue(id)
);

-- Artist Table
CREATE TABLE artist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    member_nb INT,
    UNIQUE (name)
);

-- Customer Table
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
-- Genre Table
CREATE TABLE genre (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Event Table
CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    date TIMESTAMP NOT NULL,
    venue_id INT NOT NULL,
    hall_id INT NOT NULL,
    FOREIGN KEY (venue_id) REFERENCES venue(id),
    FOREIGN KEY (hall_id) REFERENCES hall(id)
);

-- Ticket Table
CREATE TABLE ticket (
    id SERIAL PRIMARY KEY,
    event_id INT NOT NULL,
    customer_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (event_id) REFERENCES event(id),
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

-- Gear Table
CREATE TABLE gear (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Artist_Genre Table
CREATE TABLE artist_genre (
    artist_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (artist_id, genre_id),
    FOREIGN KEY (artist_id) REFERENCES artist(id),
    FOREIGN KEY (genre_id) REFERENCES genre(id)
);

-- Artist_Gear Table
CREATE TABLE artist_gear (
    artist_id INT NOT NULL,
    gear_id INT NOT NULL,
    PRIMARY KEY (artist_id, gear_id),
    FOREIGN KEY (artist_id) REFERENCES artist(id),
    FOREIGN KEY (gear_id) REFERENCES gear(id)
);
