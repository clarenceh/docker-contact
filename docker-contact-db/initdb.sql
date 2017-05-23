CREATE TABLE contact (
    id                  SERIAL PRIMARY KEY NOT NULL,
    first_name          VARCHAR(100) NOT NULL,
    last_name           VARCHAR(100) NOT NULL,
    email               VARCHAR(100) NOT NULL,
    telephone           VARCHAR(20),
    CONSTRAINT ux_contact_1 UNIQUE(first_name, last_name),
    CONSTRAINT ux_contact_2 UNIQUE(email)
);

INSERT INTO contact (first_name, last_name, email, telephone) VALUES ('Scott', 'Tigger', 'scott@abc.com', '11111111');
INSERT INTO contact (first_name, last_name, email, telephone) VALUES ('John', 'smith', 'john@abc.com', '22222222');
