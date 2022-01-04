--CREATE TABLE Sales (
--   ID int PRIMARY KEY IDENTITY(1,1) NOT NULL ,
--   Full_Name varchar(50),
--    birthday DATE,
--   Salary int
--);
--CREATE TABLE Selling  (
--   ID int IDENTITY(1,1) NOT NULL,
--   Date_of_sale date,
--   Price int,
--   SalesId int FOREIGN KEY REFERENCES Sales(ID)
--);


--SELECT TOP (1000) [ID]
--      ,[Full_Name]
  --    ,[birthday]
  --    ,[Salary]
  --FROM [StoreDB].[dbo].[Sales]

  --SELECT TOP (1000) [ID]
  --    ,[Date_of_sale]
  --    ,[Price]
  --    ,[SalesId]
  --FROM [StoreDB].[dbo].[Selling]

--INSERT INTO Selling (Date_of_sale , Price )
--VALUES ('10-20-2020' , 254 )

--1

--SELECT *
--FROM  Sales
--FULL JOIN Selling ON SALES.Salary= Selling.Date_of_sale

--2

--SELECT * 
--FROM Sales
--full JOIN Selling ON Sales.ID=Selling.ID

--3
 --SELECT * 
 --FROM Sales
 -- FULL JOIN Selling ON SALES.ID = Selling.SalesId

 --4
 --SELECT Sales.birthday, Selling.Date_of_sale
 --FROM Sales
 -- JOIN Selling ON Sales.ID = Selling.SalesId

 --5
 --SELECT * 
 --FROM Sales
 --FULL JOIN Selling ON Sales.Salary=Selling.Date_of_sale

 --6

 --SELECT * 
 --FROM Sales
 -- FULL JOIN Selling ON Sales.ID=Selling.ID

 --7
 --SELECT Sales.full_Name , sales.ID , Selling.ID
 --from Sales
 --join Selling ON Sales.ID = Selling.SalesId  

 --8
 --SELECT * 
 --FROM Sales
 --JOIN Selling ON Sales.Salary= Selling.Date_of_sale

 --9

 --SELECT * 
 -- FROM Sales
 -- JOIN Selling ON  Sales.ID = Selling.ID
  
  --10
  --SELECT Selling.ID ,Selling.Price
  --FROM Selling


--CREATE TABLE Suppliers (
--   ID int PRIMARY KEY IDENTITY(1,2) NOT NULL ,
--  First_Name varchar(50),
--  Last_Name varchar(50),
--   birthday DATE,
--   typeOfproducts varchar(50),
--);
--CREATE TABLE Orders (
--   ID int PRIMARY KEY IDENTITY(1,3) NOT NULL ,
--  Order_Date DATE,
--  Arrival_date DATE,
--  Amount INT,
--  SuppliersiD INT FOREIGN KEY REFERENCES Suppliers(ID)
--);
  
  --INSERT INTO Suppliers (First_Name ,Last_Name , birthday, typeOfproducts)
  --VALUES ('binjamin', ' yisane' , '04-04-2021','computers')

