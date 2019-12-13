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

INSERT INTO clinic (address, cnt_rating, description, name, sum_rating)
VALUES ('Safarikova 15', 0, 'Dobra kao bog', 'Klinika 1', 0);

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


INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                  last_password_reset_date, password, role)
VALUES (3, 'Nevena', 'Djukin', 'nvndjukin97@gmail.com', true, false, '2019-11-20 11:30:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_DOCTOR');

INSERT INTO personnel(id, clinic_id)
VALUES (3, 1);

INSERT INTO doctor(cnt_rating, sum_rating, id)
VALUES (0, 0, 3);

INSERT INTO user_authority (user_id, authority_id)
VALUES (3, 3);

INSERT INTO user_authority (user_id, authority_id)
VALUES (3, 4);

INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                  last_password_reset_date, password, role)
VALUES (4, 'Nevena', 'Djukin', 'nvn@gmail.com', true, false, '2019-11-20 11:30:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_NURSE');
INSERT INTO personnel(id, clinic_id)
VALUES (4, 1);

INSERT INTO nurse(id)
VALUES (4);



INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Pero', 'Peric', '123', '123', '065987654',
        '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Pajo', 'Pajic', '321', '321', '345435345',
        '432132');



INSERT INTO clinic_nurses(clinic_id, nurses_id)
VALUES (1, 4);

INSERT INTO clinic_patients(clinic_id, patients_id)
VALUES (1, 2);


INSERT INTO recepie(id, is_validate, nurse_id)
VALUES (1, FALSE, NULL);

INSERT INTO calendar(id, personnel_id)
VALUES (1, 4);

INSERT INTO calendar_item(end, start, title, udi, id, calendar_id)
VALUES ('2019-12-04 10:00', '2019-12-04 09:00', 'Prvi pregled', 'N', 1, 1);

INSERT INTO calendar_item(end, start, title, udi, id, calendar_id)
VALUES ('2019-12-05 10:00', '2019-12-05 09:00', 'Drugi pregled', 'N', 2, 1);



INSERT INTO calendar_calendar_items(calendar_id, calendar_items_id)
VALUES (1, 1);

INSERT INTO calendar_calendar_items(calendar_id, calendar_items_id)
VALUES (1, 2);

INSERT INTO calendar(id, personnel_id)
VALUES (2, 3);

INSERT INTO calendar_item(end, start, title, udi, id, calendar_id, type, typeid)
VALUES ('2019-12-04 10:00', '2019-12-04 09:00', 'Prvi pregled', 'N', 3, 2, 'Appointment', 1);

INSERT INTO calendar_item(end, start, title, udi, id, calendar_id, type, typeid)
VALUES ('2019-12-05 10:00', '2019-12-05 09:00', 'Drugi pregled', 'N', 4, 2, 'Surgery', 1);

INSERT INTO calendar_calendar_items(calendar_id, calendar_items_id)
VALUES (2, 3);

INSERT INTO calendar_calendar_items(calendar_id, calendar_items_id)
VALUES (2, 4);

UPDATE personnel
SET calendar_id =1
WHERE id = 4;

UPDATE personnel
SET calendar_id =2
WHERE id = 3;

