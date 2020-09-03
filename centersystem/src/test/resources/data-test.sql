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

INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password)
VALUES (1, 'Miroslav', 'Tomic', 'tomic.miroslav97@gmail.com', true, false, '2019-11-20 11:00:00',
        '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS');


INSERT INTO user_authority (user_id, authority_id)
VALUES (1, 1);

INSERT INTO clinic_center_admin (predefined, id)
VALUES (true, 1);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip,version)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'miroslavtomic@outlook.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543',0);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip,version)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'roncevic1996@gmail.com', 'Jovica', 'Roncevic', '321', '321', '345435345',
        '432132',0);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip,version)
VALUES ('Safarikova 16', 'Bijeljina', 'Bosna', 'sspasoje3@gmail.com', 'Spasoje', 'Simic', '321', '321', '345435345',
        '432132',0);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip,version)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'tomic.miroslav97@gmail.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543',0);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip,version)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'sre123@gmail.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543',0);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip,version)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'asddf@gmail.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543',0);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip,version)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'asddsam', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543',0);

INSERT INTO registration_requirement (address, city, country, email, first_name, last_name, password, password2,
                                      phone_num, unoip,version)
VALUES ('Safarikova 31', 'Bijeljina', 'Bosna', 'tomic.miroslav97@gmail.com', 'Miki', 'Peric', '123', '123', '065987654',
        '1234543',0);

--podaci za klinike
INSERT INTO clinic (address, cnt_rating, description, name , sum_rating)
VALUES ('Vlasenica 15', 0, 'Clinic for cardiovascular disease', 'Clinic Vlasenica', 0);

INSERT INTO clinic (address, cnt_rating, description, name , sum_rating)
VALUES ('Kikinda 66', 0, 'Clinic for neurology', 'Clinic Kikinda', 0);

INSERT INTO clinic (address, cnt_rating, description, name , sum_rating)
VALUES ('Bijeljina 42', 0, 'Clinic for dermatology', 'Clinic Bijeljina', 0);



--podaci za doktore
INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, version)
VALUES (3, 'Nevena', 'Djukin', 'nvndjukin97@gmail.com', true, false, '2019-11-20 11:30:00',
        '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS',0);

INSERT INTO personnel(id, clinic_id)
VALUES (3, 1);

INSERT INTO doctor(cnt_rating, sum_rating, start_time, end_time, id, clinic_id)
VALUES (0, 0, 8, 16, 3,1);

INSERT INTO user_authority (user_id, authority_id)
VALUES (3, 3);


INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, version)
VALUES (12, 'Doca', 'Doktor', 'doktor1@doktor1', true, false, '2019-11-20 11:30:00',
        '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS',0);

INSERT INTO personnel(id, clinic_id)
VALUES (12, 1);

INSERT INTO doctor(cnt_rating, sum_rating, start_time, end_time, id, clinic_id)
VALUES (0, 0, 7, 15, 12,1);

INSERT INTO user_authority (user_id, authority_id)
VALUES (12, 3);

INSERT INTO users (id, first_name, last_name, email, enabled, first_log,
                   last_password_reset_date, password, version)
VALUES (13, 'Stojanka', 'Skoric', 'doktor2@doktor2', true, false, '2019-11-20 11:30:00',
        '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS',0);

INSERT INTO personnel(id, clinic_id)
VALUES (13, 1);

INSERT INTO doctor(cnt_rating, sum_rating, start_time, end_time, id, clinic_id)
VALUES (0, 0, 11, 19, 13,1);

INSERT INTO user_authority (user_id, authority_id)
VALUES (13, 3);
