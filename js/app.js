/* Written by Shahar Zimmerman @ shaharzimmerman.com */

(function(angular) {

    if (!angular) {
        console.log("Angular didn't load before the script")
    }

    angular.module("app", ["youtube-embed"])

        .factory("ActiveVideo", [
            function() {
                var active = {};
                return {
                    set: function(id) {
                        if (id) {
                            active.id = id
                        }
                    },
                    active: active
                }
            }
        ])

        .controller("Main", [
            "$scope",
            "ActiveVideo",
            function($scope, ActiveVideo) {
                $scope.activeStep = 0;
                $scope.setActive = function(id) {
                    $scope.activeStep = id;
                };
                $scope.steps = [
                    {
                        header: "Understand the platform",
                        subtext: "Steps to understand the platform in this video",
                        videoid: "sMKoNBRZM1M"
                    },
                    {
                        header: "Understand the tools",
                        subtext: "Understand the tools",
                        videoid: "18-xvIjH8T4"
                    }
                ]
            }
        ])

})(angular);