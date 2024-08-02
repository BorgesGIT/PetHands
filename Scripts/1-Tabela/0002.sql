-- Select the database "pethands"
USE pethands;

-- Create the table "Configuration" if it does not exist
CREATE TABLE IF NOT EXISTS Configuration (
    ConfigurationID INT AUTO_INCREMENT PRIMARY KEY, -- Auto-incremented primary key field
    Domain VARCHAR(100) NOT NULL,                   -- VARCHAR field with a maximum of 100 characters
    Description VARCHAR(100),                       -- VARCHAR field with a maximum of 100 characters
    Value VARCHAR(3000)                             -- VARCHAR field with a maximum of 3000 characters
);
