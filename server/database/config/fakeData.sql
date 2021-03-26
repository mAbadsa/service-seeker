
INSERT INTO users(email,password,name,mobile,avatar,location,role) 
VALUES (
    'Reinald',
    'rhrishanok0@google.com',
    '123456789',
    '959-398-7264',
    '2878 Di Loreto Road',
    'https://robohash.org/excepturisitdolores.png?size=50x50&set=set1',
    'provider'
  ),
  (
    'Melicent',
    'mllewelyn1@ucoz.com',
    '123456789',
    '124-136-6347',
    '0724 Kim Crossing',
    'https://robohash.org/minimacupiditateipsam.png?size=50x50&set=set1',
    'user'
  ),
  (
    'Dugald',
    'dstrotone2@umich.edu',
    '123456789',
    '697-350-0993',
    '76 Birchwood Trail',
    'https://robohash.org/ipsaeiusvel.png?size=50x50&set=set1',
    'provider'
  ),
  (
    'Shelli',
    'slamzed3@gnu.org',
    '123456789',
    '429-847-1775',
    '12437 Menomonie Court',
    'https://robohash.org/minusnihildolorum.png?size=50x50&set=set1',
    'user'
  );

INSERT INTO providers(
    user_id,
    bio,
    price_houer,
    availability,
    rating
  )
VALUES (
    1,
    'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    4.59,
    true,
    5
  ),
  (
    3,
    'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    7.84,
    true,
    3
  );