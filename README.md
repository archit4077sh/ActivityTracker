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
</br>
To use the application clone the repository and go to ActivityTracker/BackEnd and open terminal and use the following command(assuming you have npm and angular7 installed if not please do that first)
</br>
</br>
npm install
</br>
</br>
and then goto ActivityTracker/FrontEnd/ActivityTracker and use the same command again.Now in ActivityTracker/BackEnd use the following command-
</br>
</br>
node index.js  
</br>
</br>
In ActivityTracker/FrontEnd/ActivityTracker use the following command-
</br>
</br>
ng serve --open
</br>
</br>
now this will open the application in your browser.




