INSERT INTO authority (name)
VALUES ('ROLE_CCADMIN');
INSERT INTO authority (name)
VALUES ('ROLE_ADMINC');
INSERT INTO authority (name)
VALUES ('ROLE_DOCTOR');
INSERT INTO authority (name)
VALUES ('ROLE_NURSE');
INSERT INTO authority (name)
VALUES ('ROLE_PATIENT');
INSERT INTO authority (name)
VALUES ('ROLE_PERSONNEL');

INSERT INTO clinic (address, cnt_rating, description, name , sum_rating)
VALUES ('Vlasenica 15', 0, 'Clinic for cardiovascular disease', 'Clinic 1', 0);

INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, role)
VALUES (1, 'Miroslav', 'Tomic', 'tomic.miroslav97@gmail.com', true, false, '2019-11-20 11:00:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_CCADMIN');

INSERT INTO user_authority (user_id, authority_id)
VALUES (1, 1);

INSERT INTO clinic_center_admin (predefined, id)
VALUES (true, 1);

INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, role)
VALUES (2, 'Jovana', 'Lakic', 'jovana.lakic8@gmail.com', true, false, '2019-11-20 11:25:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_PATIENT');

INSERT INTO user_authority (user_id, authority_id)
VALUES (2, 5);

INSERT INTO patient (address, city, country, is_activated, phone_num, unoip, id)
VALUES ('Ilije Bircanina', 'Vlasenica', 'Bosna i Hercegovina', true, '065987544', '1234567890', 2);

INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, role)
VALUES (5, 'Jecko', 'Pecko', 'jecko@gmail.com', true, false, '2019-11-20 11:25:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_ADMINC');

INSERT INTO user_authority (user_id, authority_id)
VALUES (5, 2);

INSERT INTO clinic_admin(id, clinic_id)
VALUES (5, 1);


INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, role)
VALUES (3, 'Nevena', 'Djukin', 'nvndjukin97@gmail.com', true, false, '2019-11-20 11:30:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_DOCTOR');

INSERT INTO personnel(id, clinic_id)
VALUES (3, 1);

INSERT INTO doctor(cnt_rating, sum_rating, start_time, end_time, id, clinic_id)
VALUES (0, 0, 8, 16, 3,1);

INSERT INTO user_authority (user_id, authority_id)
VALUES (3, 3);

INSERT INTO user_authority (user_id, authority_id)
VALUES (3, 4);

INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, role)
VALUES (4, 'Milena', 'Milic', 'nvn@gmail.com', true, false, '2019-11-20 11:30:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_NURSE');
INSERT INTO personnel(id, clinic_id)
VALUES (4, 1);

INSERT INTO nurse(id, clinic_id)
VALUES (4,1);

INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, role)
VALUES (6, 'Stefan', 'Peric', 'stefan@stefan.com', true, false, '2019-11-20 11:25:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_PATIENT');

INSERT INTO user_authority (user_id, authority_id)
VALUES (2, 6);

INSERT INTO patient (address, city, country, is_activated, phone_num, unoip, id)
VALUES ('Masarikova', 'Novi Sad', 'Srbija', true, '065312532', '4351233', 6);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');
INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');
INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');
INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');
INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');
INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');
INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');
INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');
INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132');


INSERT INTO clinic_patients(clinic_id, patients_id)
VALUES (1, 2);

INSERT INTO clinic_patients(clinic_id, patients_id)
VALUES (1, 6);


INSERT INTO prescription(id, is_validate, nurse_id)
VALUES (1, FALSE, NULL);

INSERT INTO calendar(id, personnel_id)
VALUES (1, 4);

INSERT INTO calendar_item(end, start, title, all_day, id, calendar_id,type)
VALUES ('2020-01-28 10:00:00', '2020-01-28 09:00:00', 'First examination', 'N', 1, 1,'APP');

INSERT INTO calendar_item(end, start, title, all_day, id, calendar_id,type)
VALUES ('2020-01-29 11:00:00', '2020-01-29 10:00:00', 'Second examination', 'N', 2, 1,'APP');



INSERT INTO calendar(id, personnel_id)
VALUES (2, 3);

INSERT INTO calendar_item(end, start, title, all_day, id, calendar_id,type)
VALUES ('2020-01-30 11:00:00', '2020-01-30 09:00:00', 'First examination', 'N', 3, 2,'APP');

INSERT INTO calendar_item(end, start, title, all_day, id, calendar_id,type)
VALUES ('2020-01-30 12:00:00', '2020-01-30 11:00:00', 'Second examination', 'N', 4, 2,'APP');

INSERT INTO calendar_item(end, start, title, all_day, id, calendar_id,type)
VALUES ('2020-01-30 14:00:00', '2020-01-30 12:00:00', 'Third examination', 'N', 5, 2,'APP');


UPDATE personnel
SET calendar_id =1
WHERE id = 4;

UPDATE personnel
SET calendar_id =2
WHERE id = 3;

INSERT INTO appointment_type(id, type) VALUES (1,'General examination');
INSERT INTO appointment_type(id, type) VALUES (2,'Heart examination');

INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (1,FALSE ,'SUR','For heart',1,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (2,FALSE ,'SUR','For head',2,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (3,FALSE ,'SUR','For brain',3,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (4,FALSE ,'SUR','For skin',4,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (5,FALSE ,'SUR','For legs',5,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (6,FALSE ,'SUR','For old',6,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (7,FALSE ,'SUR','For surgery',7,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (8,FALSE ,'SUR','For Ah1',8,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (9,FALSE ,'SUR','For heart',9,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (10,FALSE ,'SUR','For Ah3',10,1);
INSERT INTO room(id,reserved,room_type,name,room_num,clinic_id) VALUES (11,FALSE ,'SUR','For heart',11,1);

INSERT INTO roomcalendar(date, termin, room_id) VALUES ('2020-01-22 07:00:00',7,1);
INSERT INTO roomcalendar(date, termin, room_id) VALUES ('2020-01-22',10,1);
INSERT INTO roomcalendar(date, termin, room_id) VALUES ('2020-01-22',16,1);

INSERT INTO surgery_requirement(date,termin,clinic_id,patient_id,doctor_id,patient_name,doctor_name)VALUES ('2020-01-23',7,1,2,3, 'Jovana Lakic','Nevena Djukin');
INSERT INTO surgery_requirement(date,termin,clinic_id,patient_id,doctor_id,patient_name,doctor_name)VALUES ('2020-01-31',10,1,2,3,'Jovana Lakic','Nevena Djukin');
INSERT INTO surgery_requirement(date,termin,clinic_id,patient_id,doctor_id,patient_name,doctor_name)VALUES ('2020-01-25',13,1,2,3,'Jovana Lakic','Nevena Djukin');