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

INSERT INTO user (id, first_name, last_name, email, enabled, first_log,
                  last_password_reset_date, password, role)
VALUES (1, 'Miroslav', 'Tomic', 'tomic.miroslav97@gmail.com', true, false, '2019-11-20 11:00:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_CCADMIN');
INSERT INTO user (id, first_name, last_name, email, enabled, first_log,
                  last_password_reset_date, password, role)
VALUES (2, 'Jovana', 'Lakic', 'jovana.lakic8@gmail.com', true, false, '2019-11-20 11:25:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_PATIENT');
INSERT INTO user (id, first_name, last_name, email, enabled, first_log,
                  last_password_reset_date, password, role)
VALUES (3, 'Nevena', 'Djukin', 'nvndjukin97@gmail.com', true, false, '2019-11-20 11:30:00',
        '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra',
        'ROLE_DOCTOR');

INSERT INTO user_authority (user_id, authority_id)
VALUES (1, 1);
INSERT INTO user_authority (user_id, authority_id)
VALUES (2, 5);
INSERT INTO user_authority (user_id, authority_id)
VALUES (3, 3);

INSERT INTO patient (address, city, country, is_activated, phone_num, unoip, id, medical_record_id)
VALUES ('Ilije Bircanina', 'Vlasenica', 'Bosna i Hercegovina', true, '065987544', '1234567890', 2, 1);

INSERT INTO clinic_center_admin (predefined, id)
VALUES (true, 1);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova', 'Bijeljina', 'Bosna', 'sspasoje3@gmail.com', 'Pero', 'Peric', '123', '123', '065987654', '1234543');

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip)
VALUES ('Safarikova', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Pajo', 'Pajic', '321', '321', '345435345', '432132');


