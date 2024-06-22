
-- Insert into Address Table
INSERT INTO address (street, city, state, zip)
VALUES
    ('123 Main St', 'Anytown', 'CA', '12345'),
    ('456 Oak Ave', 'Sometown', 'NY', '67890');

-- Insert into Venue Table
INSERT INTO venue (name, address_id, capacity)
VALUES
    ('Music Hall', 1, 500),
    ('Outdoor Stage', 2, 1000);

-- Insert into Hall Type Table
INSERT INTO hall_type (name)
VALUES
    ('Main Hall'),
    ('Outdoor Stage');

-- Insert into Hall Table
INSERT INTO hall (name, type_id, venue_id)
VALUES
    ('Main Hall A', 1, 1),
    ('Main Hall B', 1, 1),
    ('Stage A', 2, 2);

-- Insert into Artist Table
INSERT INTO artist (name, member_nb)
VALUES
    ('Artist 1', 4),
    ('Artist 2', 3);

-- Insert into Customer Table
INSERT INTO customer (name, email, password)
VALUES
    ('John Doe', 'john.doe@example.com', 'hashed_password_1'),
    ('Jane Smith', 'jane.smith@example.com', 'hashed_password_2');

-- Insert into Genre Table
INSERT INTO genre (name)
VALUES
    ('Rock'),
    ('Pop'),
    ('Jazz');

-- Insert into Event Table
INSERT INTO event (name, date, venue_id, hall_id)
VALUES
    ('Summer Music Festival', '2024-08-15 19:00:00', 1, 1),
    ('Acoustic Night', '2024-09-20 18:30:00', 2, 3);

-- Insert into Ticket Table
INSERT INTO ticket (event_id, customer_id, price)
VALUES
    (1, 1, 50.00),
    (1, 2, 50.00),
    (2, 2, 20.00);

-- Insert into Gear Table
INSERT INTO gear (name, description)
VALUES
    ('Guitar', 'Electric guitar'),
    ('Drums', 'Acoustic drum set');

-- Insert into Artist_Genre Table
INSERT INTO artist_genre (artist_id, genre_id)
VALUES
    (1, 1),  -- Artist 1 plays Rock
    (1, 2),  -- Artist 1 also plays Pop
    (2, 3);  -- Artist 2 plays Jazz

-- Insert into Artist_Gear Table
INSERT INTO artist_gear (artist_id, gear_id)
VALUES
    (1, 1),  -- Artist 1 uses Guitar
    (2, 2);  -- Artist 2 uses Drums;