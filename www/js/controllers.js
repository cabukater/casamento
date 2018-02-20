angular.module('app.controllers', [])
  
.controller('conviteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('MapCtrl', function($scope, $ionicLoading, $compile) {

function initialize() {
        var myLatlng = new google.maps.LatLng(-23.5789084,-46.6294458);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Casamentos das Camilas</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Casamentos Camilas'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize());
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Av. Engenheiro Luís Gomes Cardim Sangirardi, 20 Vila Mariana, São Paulo - SP')
      };
      

    })

   
.controller('ConfirmaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

    

  function ($scope,$ionicScrollDelegate,$http) {

        



          
       function  postContactToGoogle(event)  {
             event.stopPropagation()
            var nome1 = $('#nome1').val();
            var acompanhante1 = $('#acompanhante1').val();
            var acompanhante2 = $('#acompanhante2').val();
            var acompanhante3 = $('#acompanhante3').val();
            
              $.ajax({
                 url:"ttps://docs.google.com/forms/d/e/1FAIpQLSfvXJF1M9OJFrGgu6sPMc9QTsZhduks5w2wrMt8JEHmbzeOQA/formResponse",
                 data: {"entry.618988717":nome, "entry.1623376728":acompanhante1, "entry.1357139813":acompanhante2,"entry.1924101444":acompanhante3},
                 type:"POST",
                 dataType:"xml",

                   statusCode: {
                      0:function () {
                      // body...
                     alert("sucess");
                    },
                    200:function(){
                      alert("oi")
                    }
                   }

              });



          }




  
  }])

.controller('tab3DefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('gPSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 