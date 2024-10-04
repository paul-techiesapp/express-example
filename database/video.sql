-- Create videos table MySQL command
CREATE TABLE videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    url TEXT,
    thumbnail TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert into videos table MySQL command
INSERT INTO videos (title, url, thumbnail) VALUES ('Introduction to Python Programming', 'https://www.youtube.com/watch?v=rfscVS0vtbw', 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg');
INSERT INTO videos (title, url, thumbnail) VALUES ('Introduction to JavaScript Programming', 'https://www.youtube.com/watch?v=PkZNo7MFNFg', 'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg');
INSERT INTO videos (title, url, thumbnail) VALUES ('Introduction to PHP Programming', 'https://www.youtube.com/watch?v=OK_JCtrrv-c', 'https://i.ytimg.com/vi/OK_JCtrrv-c/hqdefault.jpg');
INSERT INTO videos (title, url, thumbnail) VALUES ('Introduction to Java Programming', 'https://www.youtube.com/watch?v=grEKMHGYyns', 'https://i.ytimg.com/vi/grEKMHGYyns/hqdefault.jpg');
INSERT INTO videos (title, url, thumbnail) VALUES ('Introduction to C++ Programming', 'https://www.youtube.com/watch?v=Rub-JsjMhWY', 'https://i.ytimg.com/vi/Rub-JsjMhWY/hqdefault.jpg');