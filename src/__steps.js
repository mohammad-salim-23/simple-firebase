/***
 *      --------------
 *     INITIAL INSTALLATION
 * -------------------------
 * 1.visit:console.firebase.google.com
 * 2.create preoject(skip google analystics)
 * 3.Register App(create config)
 * 4.install firebase:npm install firebase
 * 5.add config file to your project
 * 6.Danger:Don not publish or make firebase config to public by publishing those to github
 *    -----------------
 *     INTEGRATION
 *    -------------
 * 7.visit: Go to DOcs>Build>Authentication>Web>Get Started
 * 8. export app from the firebase.config.js file:export default app
 * 9.Login.jsx : import getAuth from firebase/auth
 *  
 * 10. create const auth = getAuth(app)
 *        ----------------
 *          PROVIDER
 *          ------------
 * 11. import GoogleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13.activate sign-in method(google,facebook etc)
 * 14.
 *      -------------------
 *     More Auth PROVIDER
//  * Github
 *     1 ACTIVATE THE AUTH PROVIDER(create app,provide redireect url,client idand client secret)
 */