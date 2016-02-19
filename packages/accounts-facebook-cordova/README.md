#Accounts Facebook Cordova

[![Join the chat at https://gitter.im/buildhybrid/platform](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/buildhybrid/platform?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

** this package is an upgrade to mrt:accounts-facebook-cordova (https://atmospherejs.com/mrt/accounts-facebook-cordova) and it implements Facebook SDK 4 + API 2.4

This packages replaces the accounts-facebook package. It works with [cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4.git) when using cordova and falls back to the facebook package when in a browser. 

### Platforms Tested
* [x] iOS
* [ ] Android

*Current status: Login works great! Working on abstracting the graph api calls so they work from both native sdk or http request .. although it may be better to just stick with http.*

## Installation / Setup

##### Requirements
* [Cordova: 3.5](http://cordova.apache.org/)
* [cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4)

================

##### Package Installation
````
meteor add btafel:accounts-facebook-cordova
````
*Note: For testing you can also add accounts-ui package.*



================

##### Meteor settings file (settings.json)
````
{
  "facebook": {
    "appId": "[app_id]",
    "secret": "[app_secret]"
  },
  "public": {
    "facebook": {
      "permissions": [
        "basic_info", 
        "user_interests", 
        "user_activities", 
        "read_friendlists"
      ]   
      "profileFields": [
        "name",
        "gender",
        "location"
      ]   
    }
  }
}
````
================

### Cordova Setup Guide
Refer to the [phonegap-facebook-plugin readme](https://github.com/phonegap/phonegap-facebook-plugin)

## Final Notes

##### Running your app with settings
````
meteor --settings settings.json
````
================

If you want more features than this provides, file an issue. Feature requests/contributions are welcome.
