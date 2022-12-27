# Deutsche BahnTrip Planner

Angular webapp for Deutsch bahn’s API

## SCOPE :

```
● Ability to input a location , Date & Time & the ability to retrieve destinations
and trips
● Visualizing the trip itinerary & stops on the map.
● Intuitive and Responsive UI : Optimization for mobile devices since most
users will be on the move.
● Maintainable code with non-regression testing
```

### DEPLOYMENT :

➕ **Running the app locally**
To run the project locally run the following command sequence under “deutsche-bahn-trip-planner-master”
Directory:

● npm install
● npm start
>Then proceed to Localhost: 4200 to view the webapp

➕ **Testing The app**
Run the following command under “deutsche-bahn-trip-planner-master” directory :

```
● ng test
```
>A karma/jasmine result page will be displayed automatically in the browser


➕ **Deploying the app**
● Apache 2 environment:
○ Run the following command:
■ ng build
○ A new directory with the name “dist” will be created under
“deutsche-bahn-trip-planner-master” , Copy the content of “deutsche-bahn-trip-planner-master/trip-hw” to :
■ Under Linux :/var/www/html
■ Under XAMPP :to htdocs folder
○ Go to Localhost on browser
● Dockerized environment :
○ Run the following command sequence under the directory
“deutsche-bahn-trip-planner-master”
■ ng build
■ docker build - t  trip-planner.
○ Upload your image to your environment of choice (azure/aws)
○ To view the project running on docker locally run the following
command:
■ docker run - p 80 : 80  trip-planner
○ Go to Localhost on browser

**Features:**

➕ **Technical stack and details**
● VCS : Git (local)
● IDE : MS Visual Code
● Technology Stack :
○ Angular , Typescript
○ Rxjs
○ Material
○ Bootstrap
○ Karma / Jasmine
● Packaging : Docker
➕ **Project Structure and Data flow:**


➕ **Layout choice:**
During the development of this webapp , we have kept in mind the UI & UX for both
desktop and mobile users. we are confident that the mobile usability is
indispensable as the true utility of this piece of software is on the go.

**STEP 1 : Data Input & Search**
The navigation between dierent controls and steps is achieved seemlessly without
the need to go through convoluted dierent pages and everything that the use may
need is present on screen at all times.
The user input process is intuitive, as the needed data invites the user to enter the
data in a top-down manner.

PS: The station (departure field) is the only required field, by leaving the date & time fields empty. Now
is set by default


**STEP 2 : Visualizing Trips + Searching for trips**
As illustrated by the screenshot below, The search results are displayed right under
the search box.
This allows for easy and fast access to navigate to the next step.
The whole panel scrolls vertically to allow the user to vertically scan results and
select the desired trip and go to trip detail view mode.

**STEP 3 : Visualizing trip details and the Map**
By selecting a departure point from the last step, The user can now see all the stops
available and the itinerary is displayed on the map in red, with two markers marking
the start and end point.
Clicking on any of the stops will add a new marker on the map describing visually
the position of the stop.


The user is able to toggle the list’s visibility for better access to the map on mobile
devices.

**Notes:**
● For the optimal experience replace the **google mapsapi key** with a
production one to remove the watermark from the map

```

Abdel Moneem Saadaoui - Contact.moneem@gmail.com-+ 21620087170
```

