# SEI-26 / Kalya Kusumadi / Project-2: Timely

Access it at https://timely.kkusumad.vercel.app/

# Timely. The time of your world at your fingertips.

In this age of travel and interconnectivity, we are having our personal and professional network spread around the global. Combined with the current travel restrictions worldwide, instead of being able to travel to other countries to meet colleagues, friends and family face to face, we have to turn to holding meetings, game nights, heart to heart talks online. 

But with everyone located all around the world, scheduling these much needed times brings out a whole new challenge. When do we hold these meetings? How do we see in a glance the times of 3, 4 or even more locations?

## Description

 The aim of this app where not only can you have everyone’s times shown on one page, we are able to input a time in any 1 timezone and it will convert it to the other times, and have the group of timezones stored for future use.

### Technical Used

- React
- Bootstrap with react
- Axios for API
- Firebase/Firestore
- react-router / react-router-dom
- dayjs

## Features ideas:
1. adding/deleting/editing of profiles
2. local storage of profiles
3. pins on everyone's location tying #4 and #5
4. time zone converter
5. meeting scheduler (calender)
6. currency conversion (https://fixer.io/quickstart)
7. random meme generator

## Wireframe
https://www.figma.com/file/7wp3g1gYo4YWVo14v3G41B/GA-Project-2

<img src="./images/Screenshot%202020-12-11%20at%203.30.46%20PM.png" alt="Contact Page" width="500px">  
  
<img src="./images/Screenshot%202020-12-11%20at%2011.05.31%20AM.png" alt="Time Conversion Page" width="500px">

### User Stories
As a user, I would want to:
Be able to see the current times at a few different countries
Be able to see the times at a few different countries at a specified local time
Be able to save the timezones for multiple people for future use
Be able to save multiple groups of people.

---
## Planning and Development Process

A basic story of your planning and developing this project.

My initial planning was to get the data structure of the contacts to be saved in Firebase, and then looking at the API documents to see what data was needed and available. I was 

### Problem-Solving Strategy

A lot of trial and error, Googling and asking for help from Simon and Nausheen and using console log to help see which line is running but not working as expected.

### Unsolved problems

1. Deleting/moving users from/across groups.
2. Retrieving the name of collections (groups) to have a more flexibility.
3. Having the time in the top bar to show the time based on the user's timezone retrieved from firebase.
4. Having the app to generate an ical file based on the converted time.
5. Having the ical file be emailed to selected contacts in the group.

## APIs Used

1. Firebase/Firestore:  
Firebase was used for the storage of users and their groups and contacts for the data to be used across devices and locations.

2. Timezonedb:  
Timezonedb was used for the retrieval of the different timezone names based on the countries the user selects. It was called on instead of having the names stored in a json file as the app would have to run through thousands of lines to get a small portion of the array.

## Acknowledgments


---

 ## References
