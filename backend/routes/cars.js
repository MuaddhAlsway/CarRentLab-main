await db.run(`
  INSERT INTO cars (name, type, brand, price, img)
  VALUES
  ('Toyota Camery','Sedan','Toyota',30000,'/images/Camery.jpg'),
  ('BMW X1','Sedan','BMW',70000,'/images/BMW.jpg'),
  ('BMW X1','Sedan','BMW',80000,'/images/Bmw.webp'),
  ('Toyota Accent','Sedan','Toyota',40000,'/images/Accent.webp'),
  ('Ford X2','Sedan','Ford',90000,'/images/Ford.webp'),
  ('Ford W1','Truck','Ford',30000,'/images/FordMachine.avif'),
  ('Ford Mustang','Sedan','Ford',120000,'/images/FordMusntage.webp'),
  ('Nissan X1','Sedan','Nissan',35000,'/images/Nissan.webp')
`);