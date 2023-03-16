# HowToGeo
### Objective
HowToGeo aims to help people choose which is the best travelling method available by providing them with the appropriate data to make an informed decision

---
### Work structure
1. **Select an API**: Firstly, I researched which Maps API I was going to use for this project. I opted to go for Google Maps API. 
2. **Plan and Design the Project**: Once I have selected an API, it was time to plan and design your project. I started by creating a first sketch of the web pages I needed for the project. Given the task I opted to go for 2 different HTML web pages, both connected to the Google Maps API:
    - WelcomePage.html: A web page to explain what this web app do as well as some suggestion on where to go with the map
    - Directions.html: A web page that gets 2 inputs from the user and returns a way to get from one to the other
3. **Develop the Webpage**: With your plan and design in place, it was time to start developing my webpages. I used a mix of HTML, CSS, and JavaScript to build my webpage. Start by creating the basic HTML structure and then add CSS to style the webpage. Next, add JavaScript code to load, parse and display the data from the API on the map. The webpages:
    - WelcomePage.html: ![image](https://user-images.githubusercontent.com/114749413/225609102-eabf31cf-549c-4bf4-b199-38c6a845753c.png)
    - Directions.html: ![image](https://user-images.githubusercontent.com/114749413/225609294-59fc61f9-1e75-4de5-93b5-83680ff96e54.png)
        - The user is going to be able to decide its city of origin and city of destination. Autocompletition will be available thanks to the Google Places API:
        ![image](https://user-images.githubusercontent.com/114749413/225609753-d1720a18-a345-4c38-8cdc-f1f1256dcf7d.png)
        - By pressing the 'Directions' button the map will show the journey set to be made from for each of the 3 different travel options as well as the distance and time of travel
        ![image](https://user-images.githubusercontent.com/114749413/225610174-8fb06ed8-ee51-4a0c-8fae-0f53f3f80ad9.png)
        - In case of an impossible route, the website will advise you to check out a new place :wink:
        ![image](https://user-images.githubusercontent.com/114749413/225610608-7b37123b-07e1-4de9-bc05-012d3fdb394d.png)

    

4. **Test and Debug**: Once I had built the webpage, it was time to test it thoroughly to ensure that it works as expected.
5. **Possible improvements**: Some possible improvements I could implement to the project are:
    - Use CSS and Bootstrap to work more on the graphics of the website
    - Add more travelling options such as plane or train
    - Use React.js to make the website dynamic
    - Add the carbon footprint emissions for every type of journey
    - Create a table to recap what is the best travelling option
    - Create a sort of search engine that according to your priorities suggests the best option
