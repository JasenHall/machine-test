# machine-test
Testing new repository from scaffold.

Steps Taken:

1. Clone scaffold repository

   _**git clone https://github.com/JasenHall/scaffold.git**_
2. Rename to machine-test
3. CD into machine-test
4. Start up dev box
   
   _**vagrant up**_
5. ssh into devbox
6. Remove the remote

    _**git remote rm origin**_
7. Create new repository on Github
8. Add new remote

    _**git remote add origin https://github.com/JasenHall/machine-test.git**_
9. 


To build development environment.

1. git clone https://github.com/JasenHall/machine-test
2. vagrant up
3. ssh into devbox
4. cd /vagrant
5. npm install --no-bin-links
6. node app.js
7. Bingo - navigate to http://192.168.33.10:3000 and there you have it.
