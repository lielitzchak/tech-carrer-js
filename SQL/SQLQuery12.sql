----/****** Script for SelectTopNRows command from SSMS  ******/
--SELECT TOP (1000) [Id]
--     ,[Car_name]
--      ,[Brand]
--  FROM [officeDB].[dbo].[Parking]

--SELECT TOP (1000) [Id]
--      ,[Car_name]
--      ,[Brand]
--      ,[ParkingId]
--  FROM [officeDB].[dbo].[Car]
--1
--SELECT *
--FROM Parking
--FULL JOIN Car ON Parking.Id=Car.ParkingId

--2

--SELECT *
--FROM Parking
--FULL JOIN  Car ON  Parking.Id= Car.ParkingId

--3

--SELECT * 
--FROM Parking
-- JOIN Car ON Parking.Id= Car.Id

--4

--SELECT * 
--FROM Parking
--RIGHT JOIN Car ON Parking.Id=Car.Id

--5
--SELECT * 
--FROM Parking
--LEFT JOIN Car ON Parking.Id=Car.Id

--6
--INSERT INTO Car(Car_name,Brand)
-- VALUES ('UTYG','HJG')