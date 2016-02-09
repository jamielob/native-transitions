App.info({
  id: 'com.waited.app',
  name: 'Waited',
  description: 'Mapping the taste genome',
  version: '6.0.0'
});

App.icons({
   // iOS
  'iphone': 'resources/icons/appicon-60.png',
  'iphone_2x': 'resources/icons/appicon-60@2x.png',
  'iphone_3x': 'resources/icons/appicon-60@3x.png',
  'ipad': 'resources/icons/appicon-76.png',
  'ipad_2x': 'resources/icons/appicon-76@2x.png'
});


App.launchScreens({
  // iOS
  'iphone': 'resources/splash/Default.png',
  'iphone_2x': 'resources/splash/Default@2x.png',
  'iphone5': 'resources/splash/Default-568h@2x.png',
  'iphone6': 'resources/splash/Default-667h@2x.png',
  'iphone6p_portrait': 'resources/splash/Default-Portrait-736h@3x.png',
  'ipad_portrait': 'resources/splash/Default-Portrait.png',
  'ipad_portrait_2x': 'resources/splash/Default-Portrait@2x.png'
 });


//Deployment Target
App.setPreference('deployment-target', '8.0');

//Set Android minSdkVersion so it matches the facebook plugin
//App.setPreference('android-minSdkVersion', '15');

//Fixed orientation
App.setPreference('Orientation', 'portrait');

//Remove splash screen spinner
App.setPreference('ShowSplashScreenSpinner', 'false');
//App.setPreference('AutoHideSplashScreen' ,'true');

//Allows keyboard to be focused
App.setPreference('KeyboardDisplayRequiresUserAction', 'false');



//Allow domains 
//App.accessRule('*'); 
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

App.configurePlugin('cordova-plugin-facebook4', {
  APP_ID: '1594557434131117',
  APP_NAME: 'Waited'
});

// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '1594557434131117',
//   APP_NAME: 'Waited'
// });
