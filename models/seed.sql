USE the_hookahpDB;

INSERT INTO customers (
    customer_id, customer_first_name, customer_last_name, customer_password, customer_email
) VALUES (
    "00001", "Andrew", "Patison", "patAttack987", "acpatison@gmail.com",
);
INSERT INTO customers (
    customer_id, customer_first_name, customer_last_name, customer_password, customer_email
) VALUES (
    "00002", "Nadia", "Dorado", "LaDorada123", "Nadia's email"
);
INSERT INTO customers (
    customer_id, customer_first_name, customer_last_name, customer_password, customer_email
) VALUES (
    "00003", "Paulo", "de Sa", "SeaPaulo918", "Paulo's email"
);
INSERT INTO customers (
    customer_id, customer_first_name, customer_last_name, customer_password, customer_email
) VALUES (
    "00004", "Savannah", "Fortson", "FortSav192", "Savannah's email"
);
--Andrew's Customization:
--bottle
INSERT INTO bottles (
    customer_id, bottle_type, name_on_bottle
) VALUES (
    "00001", "Johnny Walker Blue", "Andrew's Hookah"
);
--lights
INSERT INTO lights (
    customer_id, lt_flag, lt_color
) VALUES (
    "00001", "1", "blue"
);
--hoses
INSERT INTO hoses (
    customer_id, hose_qty, hose_color, hose_length
) VALUES (
    "00001", "3", "orange", "medium"
);