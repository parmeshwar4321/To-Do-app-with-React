

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Host the application on the Github Pages
Github Pages is a static site hosting service. You can host your site on GitHub’s github.io domain or your custom domain

` npm install gh-pages --save-dev`

Add this command to package.json

`"homepage": "https://<YourUserName>.github.io/my-task-list"`

Add this command to package.json inside scripts

`"predeploy": "npm run build"`

`"deploy": "gh-pages -d build"`

now run the following command

`npm run deploy`

after that push your code to github
### hosting
Now, go to your GitHub  repository.

Click on Settings and scroll down to Github Pages.

In the Source, check if it is using gh-pages branch.

click on that link



