/* Written by Shahar Zimmerman @ shaharzimmerman.com */

(function(angular) {

    if (!angular) {
        console.log("Angular didn't load before the script")
    }

    angular.module("app", ["youtube-embed", "ui.bootstrap", "ngAnimate"])

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
                        header: "Understanding the Platform",
                        subtext: "Lorem ipsem dolor",
                        videoid: "sMKoNBRZM1M"
                    },
                    {
                        header: "Using the Tools",
                        subtext: "Lorem ipsem dolor",
                        videoid: "18-xvIjH8T4"
                    },
                    {
                        header: "Using the Troubleshooting Chart",
                        subtext: "Lorem ipsem dolor",
                        videoid: "18-xvIjH8T4"
                    },
                    {
                        header: "Using the Challenge Mode",
                        subtext: "Lorem ipsem dolor",
                        videoid: "18-xvIjH8T4"
                    },
                    {
                        header: "Checking your employees' progress",
                        subtext: "Lorem ipsem dolor",
                        videoid: "18-xvIjH8T4"
                    },
                    {
                        header: "The Power of Simulation Based Learning",
                        subtext: "Lorem ipsem dolor",
                        videoid: "18-xvIjH8T4"
                    }
                ]

                // hack to get the first accordion to open on load
                $scope.isopen = true
            }
        ])

})(angular);