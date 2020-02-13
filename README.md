# bored-app
 We  use api giphy to get picture  and use api bored  to get activity to learn:<br>
 1- use body-parser.<br>
 2- use server (app.js) file.<br>
 3- use request.<br>
 4- use express.<br>
 
# What 
Our project displays  the type of the activity from menue, When we presses giphy he gets the picture
that Server suggests about it.

# How 
 1- Create server express.<br>
 2-Split  task to moudule (giphy :get and post,toner :get and post ).<br>
 3- The data is on the server.<br>
 4- use DOM to get responce  from server and view in the browser.<br>
 
# user journey
1- As a user i should see a type of activity from menu to search.<br>
2-As a user i should see giphy or tenor to get activity photos.<br>

### File Structure: 
- public 
    - giphy.html
    - giphy.css
    -index.js
    -tenor.html
- src
  -controllers
     --error.js
     --giphy.js
     --tenor.js
     --app.js
     
 ### EndPoints:
  1- 1st Endpoint  =>  Home Page
    you can select use tenor or use giphy.
  2- 2nd EndPoint => use giphy
     GET request => respond.
     Display giphy
  3- 3rd EndPoint =>use tenor
    Display details about activity
     
 ### Instructions :
  - clone the repo and be there (cd command)
  - npm i
  - npm start
   
Team:<br>
Hanan <br>
Rahef<br> 
Banan<br>
Nidaa<br>
    
