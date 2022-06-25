test yaml, aws, github actions. test codepipeline.

Notes:
Setting a bg image in css caused a lot of problems (again). For a long time I thought I was usuing a wrong link or that I had to put the image inside the public folder. It turned out the relative path I was using was correct but other properties were not set causing the img to to not be visible on screen. here is a blue print:
.img-parent {
height: 100%
}

        .img {
            height: 100%;
            background: url('../../assets/myImages/profile-transparent.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
    Parent height must be 'measurable', so ca only use percent if ancestor has a 'measurable height'. background-size can also be cover. Most (if not all) of these rules apply to <img /> as well. also, all these properties can of course be set with shorthand background: blabla.
    Also, if we want a color overlay on bg-image, we can put linear-gradient with the same color to and from, like this:
        background: linear-gradient(rgba(0, 94, 255, 0.5), rgba(0, 94, 255, 0.5)), url('../../assets/myImages/profile-transparent.png')

    Error stemming from ScrollSpy.js using observe() method on new window.IntersectionObserver object:
        I think it's coming from that anyway. It goes away when I turn off Adblocker and Ghostery - not sure exactly which one.

    Make text vertical with flex-column and writing-mode: vertical-lr (instead of rotate(90deg)):
        .scroll__down__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
        }
        .scroll__down__text {
            writing-mode: vertical-lr;
            padding: 0 1rem;
        }
    When using component libraries (e.g. swiper) can click on element --> inspect --> click element in devtools/elements and copy the classes to do custom-styling.

    Emailjs/Browser (-com replaced by /Browser):
        It seems that there is no need to import scripts into index.html. Go to documention -- scroll to bottom --> examples --> reactJs

    Add Image to ReadME in github
        1) Add local image. Upload the image to (root level) project and link to it, like this: ![alt-text](path/file) OR upload to an already existing image in the project.
        2) Add remote image/path. Same as 1).
        3) Add image through issues --> comment. Drag and drop image into issue comment and copy the generated url. post comment so it's on github. now we can use the generated link as 1) and 2).

    Commiting (README) directly on github: Commit button was greyed out but it is possible. EDIT: disable adblocker/Ghostery! Just try to access the file from a few different routes and check if button is greyed out again. 

    check DNS propagation:
        - vslookup <my.domain> --> who.is, put in resolved ip from vslookup.

    Create image for README:
        Open dev server and take ss. Drag img into GIMP OR file->create->from clipboard (will take the latest from clipboard). Image -> scale to 1280 width (with locked height). export as jpg. Go to repository in GH. Add issue -> drag & drop image file into comment and copy the genrated path (path might be lost after posting, so add to readme first). in README: ![alt-text](file/to/image.jpg).

    useEffect() runs twice: Probably because strict-mode is on - check index.js. If not, read this SO post: https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar

    search bookmarks in Chrome: b + space or tab
        https://superuser.com/questions/158946/search-bookmarks-in-google-chrome-address-bar#:~:text=You%20can%20search%20through%20your,pressing%20CTRL%2DSHIFT%2DB.


# ------------- TO DO ------------------------

1) Create logo for favicon.
2) Replace images. 
3) get Anders/Jannik/Morten/girl to do a testimonial.
4) Add git/github. delete some others.
5) combine with other portfolio website <-- use the dice but google css dice to make it complete.
6) Add projects: Burger builder, 
7) Floating nav. Add text on hover.
8) Add usememo/usecallback/Supense-Lazyloading.
9) 
10) ------ not super neccessary
11) Add codepen to socials?
12) Add usememo/usecallback/Supense-Lazyloading.
13) Dribble profile?
14) Go through index.html.. do I need to add things
15) Accessibility.
16) Work on resume


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
