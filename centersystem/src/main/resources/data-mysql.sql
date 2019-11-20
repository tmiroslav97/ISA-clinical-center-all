INSERT INTO clinic_center (id, name, diagnose_record_id, perscription_record_id)
VALUES (1, 'Bijeljina', 1, 1);

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

INSERT INTO user (id, address, city, country, email, enabled, first_name, first_log, last_name,
                  last_password_reset_date, password, phone_num, role, unoip)
VALUES (1, 'Dazdarevo 58', 'Novi Sad', 'Bosna i Hercegovina', 'tomic.miroslav97@gmail.com', true, 'Miroslav', false,
        'Tomic', '2019-11-20 11:00:00', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '065991663', 'ROLE_CCADMIN',
        '123456789');
INSERT INTO user (id, address, city, country, email, enabled, first_name, first_log, last_name,
                  last_password_reset_date, password, phone_num, role, unoip)
VALUES (2, 'Ilije Bircanina', 'Vlasenica', 'Bosna i Hercegovina', 'jovana.lakic8@gmail.com', true, 'Jovana', false,
        'Lakic', '2019-11-20 11:25:00', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '066963384', 'ROLE_PATIENT',
        '31236565');
INSERT INTO user (id, address, city, country, email, enabled, first_name, first_log, last_name,
                  last_password_reset_date, password, phone_num, role, unoip)
VALUES (3, 'Zarka Zrenjanina', 'Padej', 'Srbija', 'nvndjukin97@gmail.com', true, 'Nevena', false,
        'Djukin', '2019-11-20 11:30:00', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '0628706269',
        'ROLE_DOCTOR',
        '42166865');

INSERT INTO user_authority (user_id, authority_id)
VALUES (1, 1);
INSERT INTO user_authority (user_id, authority_id)
VALUES (2, 5);
INSERT INTO user_authority (user_id, authority_id)
VALUES (3, 3);