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
        'Tomic', '2019-11-20 11:00:00', '$2y$12$LcfOd1ADTKREK7FZoohZLuqn6nM.Df.P06ESddo1.6/p4q/sy/AtO', '065991663', 0,
        '123456789');
INSERT INTO user (id, address, city, country, email, enabled, first_name, first_log, last_name,
                  last_password_reset_date, password, phone_num, role, unoip)
VALUES (2, 'Ilije Bircanina', 'Vlasenica', 'Bosna i Hercegovina', 'jovana.lakic8@gmail.com', true, 'Jovana', false,
        'Lakic', '2019-11-20 11:25:00', '$2y$12$EJ87j/joGOM/1V1E5ycPqeyOvmEQpvbh6TFmTOW4mYJOAmpejfjb2', '066963384', 3,
        '31236565');
INSERT INTO user (id, address, city, country, email, enabled, first_name, first_log, last_name,
                  last_password_reset_date, password, phone_num, role, unoip)
VALUES (3, 'Zarka Zrenjanina', 'Padej', 'Srbija', 'nvndjukin97@gmail.com', true, 'Nevena', false,
        'Djukin', '2019-11-20 11:30:00', '$2y$12$4iLMPq96OVo0vDWp8JhyDezre3asktHx2dGhEwpCAiqRHzFfB.1iO', '0628706269',
        2,
        '42166865');

INSERT INTO user_authority (user_id, authority_id)
VALUES (1, 2);
INSERT INTO user_authority (user_id, authority_id)
VALUES (2, 3);
INSERT INTO user_authority (user_id, authority_id)
VALUES (3, 5);