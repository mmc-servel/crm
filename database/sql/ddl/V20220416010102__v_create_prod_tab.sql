 CREATE TABLE products (
   product_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
   name        varchar(100),
   description varchar(100),
   category    varchar(100), --TO DO: probably foreign key
   mesure_unit varchar(100), --TO DO: probably foreign key
   quantity    numeric(10,2),
   price       numeric(10,2),
   created_on  date,
   updated_on  date
);

insert into products(name,description,quantity,price)
values('Microphone','SONY Hi end mic.',15, 12);
insert into products(name,description,quantity,price)
values('Headset','YAMAHA P25PRO.',5, 112);