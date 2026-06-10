use ac;

create table user_log(
    id varchar(15),
    password varchar(30),
    join_date date,
    primary key (id)
);

create table user_profile(
    user_id int,
    id varchar(15) not null,
    nick varchar(30),
    profile_photo date,
    foreign key (id) references user_log(id) on delete cascade,
    primary key (user_id)
);

create table folder(
	folder_id int,
	folder_name varchar(30),
    id varchar(15) not null,
	foreign key (id) references user_log(id) on delete cascade,
    primary key (forder_id)
);

create table card(
	card_id int,
	forder_id int, 
	id varchar(15) not null,
	en_name varchar(15),
	ko_name varchar(15),
    foreign key (id) references user_log(id) on delete cascade,
    primary key (card_id)
);