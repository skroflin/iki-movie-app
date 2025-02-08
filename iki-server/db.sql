create table imdb_movies(
id serial primary key not null,
poster_link text,
series_title varchar(255),
released_year varchar(125),
certificate text,
runtime varchar(50),
genre varchar(125),
imdb_rating float,
overview text,
meta_score int,
director varchar(255),
star_one varchar(150),
star_two varchar(150),
star_three varchar(150),
star_four varchar(150),
number_of_votes bigint,
gross text
);