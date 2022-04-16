 CREATE TABLE accounts (
   account_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
   email varchar(100),
   pwd_hash varchar(100),
   created_on date,
   updated_on date
);

insert into accounts(email,pwd_hash) values('test','test');