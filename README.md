# ActivityTracker
Activity Tracker is an application running on http://localhost:4200/. This application track the user activities on page
http://localhost:4200/:id (where id can be any string) and display that user activity on page http://localhost:4200/:id/admin.
Frontend part of this application is made using Angular7 and it contains 5 images.
</br>
</br>
The user activities that are tracked are -
</br>
</br>
1.Click on Image
</br>
2.Hover on Image
</br>
</br>
Backend server of this app is created in NodeJS and MongoDB is used to store all user activity information.
The information stored about user is -
</br>
</br>
1.ID
</br>
2.Type of Activity ie. Click/Hover
</br>
3.ImageID that was Clicked/Hovered
</br>
4.Timestamp of Activity.
</br>
To use the application clone the repository and go to ActivityTracker/BackEnd and open terminal and use command(assuming you have npm and angular7 installed if not please do that first)
</br>
npm install
</br>
and then goto ActivityTracker/FrontEnd/ActivityTracker and use the same command again.
</br>
now use command
</br>
node index.js in ActivityTracker/BackEnd and in ActivityTracker/FrontEnd/ActivityTracker use the following command
</br>
ng serve --open
</br>
now this will open the application on browser.




