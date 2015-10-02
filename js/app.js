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
                        subtext: "Take a Quick Tour of the Platform",
                        videoid: "_Eu12btpMTc",
                        imgname: "solar_panel.png"
                    },
                    {
                        header: "Using the Tools",
                        subtext: "Watch How to Use Each Tool",
                        videoid: "KHmiJGzO9wk",
                        imgname: "electricity_monitor.png"
                    },
                    {
                        header: "Using the Troubleshooting Chart",
                        subtext: "Learn to Build Troubleshooting Confidence",
                        videoid: "FlHvhwbDMuI",
                        imgname: "troubleshooting_chart.png"
                    },
                    {
                        header: "Using the Challenge Mode",
                        subtext: "Learn How to Test Yourself",
                        videoid: "jtvBKhXII4o",
                        imgname: "user_progress.png"
                    },
                    {
                        header: "The Power of Simulated Learning",
                        subtext: "Learn the Benefits of a Comprehensive Learning Plan",
                        videoid: "hRz1kxH4whk",
                        imgname: "simulated_ebox.png"
                    }
                ]

                // hack to get the first accordion to open on load
                $scope.isopen = true
            }
        ])

})(angular);