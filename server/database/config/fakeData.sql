INSERT INTO users(
    username,
    email,
    password,
    mobile,
    location,
    avatar,
    role
  )
VALUES (
    'ahmed eid',
    'aeid767@gmail.com',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '0597806990',
    'Nusirat',
    'https://avatar.oxro.io/avatar.svg?name=A',
    'provider'
  ),
  (
    'zein jendeya',
    'z.jendeya@gmail.com',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '0597888666',
    'Gaza',
    'https://avatar.oxro.io/avatar.svg?name=Z',
    'user'
  ),
  (
    'mariam isa',
    'mariam@gmail.com',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '0593500993',
    'Gaza',
    'https://avatar.oxro.io/avatar.svg?name=M',
    'provider'
  ),
  (
    'osama yonis',
    'osama.gmail.com',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '0599777999',
    'Al Zahra',
    'https://avatar.oxro.io/avatar.svg?name=O',
    'user'
  ),(
    'Muhammed abds',
    'Muhammed@gmil.com',
    '$2b$10$C7Ezul8j9h8pTE3NAV./GOIlzIr0IDqiluVVdCs7K4.Fs/cazPzFe',
    '0597222555',
    'Khan Younis',
    'https://avatar.oxro.io/avatar.svg?name=M',
    'provider'
  );
INSERT INTO providers(
    user_id,
    title,
    bio,
    price_hour,
    availability,
    rating,
    cover_image,
    service_type
  )
VALUES (
    1,
    'Builder/Developer services',
    'oversee, coordinate and work on the construction,
     repair and renovation of homes and other buildings',
    4.6,
    true,
    5,
    'https://resources.stuff.co.nz/content/dam/images/1/w/e/9/7/k/image.related.StuffLandscapeSixteenByNine.710x400.1w0s0r.png/1565436771578.jpg?format=pjpg&optimize=medium',
    'Builder'
  ),
  (
    3,
    'Master Electrician',
    'Read blueprints or technical diagrams.
     Install and maintain wiring, control,
      and lighting systems. Inspect electrical components,
       such as transformers and circuit breakers. 
       Identify electrical problems using a variety of testing devices.',
    7.8,
    false,
    3,
    'https://www.thebalancecareers.com/thmb/s1X5a3Lr_OI6mVwrpDyfrzBBgZM=/400x0/filters:max_bytes(150000):strip_icc()/Electrician_526009_final_2-f3c6d0f5bd6744abb3cbdb155502f1fb.png',
    'Electrician'
  ),(
    5,
    'Trim carpenter',
    'Specialises in mouldings and trims, such as mantles, skirting boards), and other ornamental work.',
    7.8,
    true,
    3,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY-y-rFTnxhVi5G9OTD3rX0aMBn55vlhg0kmZlagqgx8vmmYDqJfBoKX0ULC_F_y-tDM&usqp=CAU',
    'Carpenter'
  );
INSERT INTO orders_request(
    user_id,
    provider_id,
    description,
    state,
    date
  )
VALUES(
    2,
    3,
    'Need to maintenance to my electricety in my home',
    'pending',
    '2021-04-07 21:31:11.276724'
  ),
  (
    2,
    1,
    'Need to maintenance to my a garden wall',
    'accepted',
    '2021-04-08 15:41:01.276724'
  ),
  (
    1,
    3,
    'need to maintenance electricity in my office',
    'finished',
    '2021-04-10 11:51:01.276724'
  ),
  (
    3,
    1,
    'Need to maintenance kitchen supplier',
    'accepted',
    '2021-04-10 11:51:01.276724'
  );
INSERT INTO orders(
    orders_request_id,
      start_date,
    paused_date,
    state,
    arrive_time,
    hour_number,
    resources_price,
    total_bill_price
  )VALUES(
    2,
    null,
    null,
    'Accepted',
    null,
    null,
    null,
    null
  ),(
    3,
    '2021-04-15 14:30:10',
    '2021-04-15 15:20:10',
    'Paused',
    '13:20:10',
    6.2,
    100.6,
    149.1
  );
  INSERT INTO notification(
    user_id,
    description
  )VALUES(
    1,
    'order request number 2 completed'
  ),(
    2,
    'order request number 1 canceled'
  );
