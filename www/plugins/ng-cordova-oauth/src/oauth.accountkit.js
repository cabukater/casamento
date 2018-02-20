(function() {
  'use strict';

  angular.module('oauth.accountkit', ['oauth.utils'])
    .factory('$ngCordovaAccountKit', accountKit);

  function accountKit($q, $http, $cordovaOauthUtility) {
    return { signin: oauthaccountkit };

    /*
     * Sign into the 500px service
     *
     * @param    string sdkKey
     * @param    object options
     * @return   promise
     */
    function oauthaccountkit(url_app, uri) {
      var deferred = $q.defer();
      if(window.cordova) {
        if($cordovaOauthUtility.isInAppBrowserInstalled()) {
          var redirect_uri = "http://localhost/callback";
          if(typeof uri !== undefined) {
                redirect_uri = uri;
          }
          var api_id = '531228893597329';
          var browserRef = window.cordova.InAppBrowser.open('https://www.accountkit.com/v1.0/dialog/sms_login/?app_id='+api_id+'&country_code=%2B55&fb_app_events_enabled=true&locale=pt_BR&logging_ref=f2b531fda08f9f4&origin=' + url_app + '&sdk=web&state=abcd', '_blank', 'toolbar=no,zoom=no,location=no,clearsessioncache=yes,clearcache=yes');
          browserRef.addEventListener('loadstart', function(event) {
            if((event.url).indexOf(redirect_uri) === 0) {
              var accessToken = (event.url).split("#token:")[1].split(',')[0];
                deferred.resolve({error: false, success: true, access_token: accessToken, callback: redirect_uri});
            } else {
              deferred.reject({success: false, callback: redirect_uri, error: true, access_token: null});
            }
          });
          browserRef.addEventListener('exit', function(event) {
            deferred.reject("The sign in flow was canceled");
          });
        } else {
          deferred.reject("Could not find InAppBrowser plugin");
        }
      } else {
        deferred.reject("Cannot authenticate via a web browser");
      }
      return deferred.promise;
    }
  }

  accountKit.$inject = ['$q', '$http', '$cordovaOauthUtility'];
})();