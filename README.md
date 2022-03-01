# RumRum cars - Buy & Sell Cars website.

### Built using MERN Stack


<div style="display: flex;">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React" width=50 />
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" alt="Redux" width=50 />
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" alt="Sass" width=50 />
<img src="https://pgjones.dev/tozo/frontend/img/material-ui.png" alt="MaterialUI" height=50/>
<img src="https://cdn.goconqr.com/uploads/slide_property/image/269077/desktop_ac51429c-a01c-48ec-9013-a41fc9eea71e.png" alt="MongoDB" width=50/>
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="NodeJS" height=50/>
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" alt="Express" height=50/>
<br/><br/>
</div>

This website is my first one where i applied **Backend technologies** like MondoDB - Express - NodeJS.<br/>
In the **Frontend development** i used React and Redux for the state.<br/>
For **styling** and organizing all the CSS i choosed the Sass preprocessor. Also the MaterialUI library was used for some responsive components.

**React hook form** was used to handle errors on the "sell a car" form and for the Firebase authentication.

## Firebase
I used the Firebase service to implement **User Authentication** on the website.<br/>
Also **Firebase hosting** was used to... well.

## Image storing on the cloud.
And for posting and receiving the car images i used [Cloudinary](https://cloudinary.com/ "Cloudinary website") service.
> At first a system for posting and receiving images was made using only [Multer](https://github.com/expressjs/multer "Multer website") where the images were stored in a private file on my workspace, but i wanted to improve as this method has some cons in the long run.

### About functionality
The user can select a car which he likes most, he click on the "Buy this car" button and the delete method is triggered.<br/>
Also the part i like the most is when you want to sell a car and all the process that is shown until the car is finally uploaded with all it's description and image.
