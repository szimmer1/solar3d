/* Written by Shahar Zimmerman @ shaharzimmerman.com */

(function(angular) {

    if (!angular) {
        console.log("Angular didn't load before the script")
    }

    angular.module("app", ["youtube-embed", "ui.bootstrap", "ngAnimate"])

        .controller("Main", [
            "$scope",
            "$window",
            function($scope, $window) {
                $scope.steps = [
                    {
                        header: "The Platform",
                        videos: [
                            {
                                subtext: "Understanding the Platform",
                                videoid: "nZ3Re-5WFrQ",
                                imgname: "solar_panel.png"
                            },
                            {
                                subtext: "The Power of Simulated Learning",
                                videoid: "WaKcapO84Bo",
                                imgname: "simulated_ebox.png"
                            }
                        ]
                    },
                    {
                        header: "Foundations Course",
                        videos: [
                            {
                                subtext: "The Solar Foundations Course",
                                videoid: "DmLFWgTr_kE",
                                imgname: "Solar Foundations Thumbnail.png"
                            }
                        ]
                    },
                    {
                        header: "The Operations and Maintenance Simulation",
                        videos: [
                            {
                                subtext: "The Learning Path",
                                videoid: "4hH9723yO3Y",
                                imgname: "Learning Path Thumbnail.png"
                            },
                            {
                                subtext: "Using the Tools",
                                videoid: "wQNf0bBLZ64",
                                imgname: "electricity_monitor.png"
                            },
                            {
                                subtext: "Using the Toubleshooting Chart",
                                videoid: "GJTilhwNbGU",
                                imgname: "Thumbnail Troubleshooting.png"
                            },
                            {
                                subtext: "Playing the Challenge Mode",
                                videoid: "EM3Pwy3PMVY",
                                imgname: "Challenge Thumbnail.png"
                            }
                        ]
                    },
                    {
                        header: "The Solar Sales Course",
                        videos: [
                            {
                                subtext: "The Solar Sales Course",
                                videoid: "YtyZvBemGwY",
                                imgname: "Sales Thumbnail.png"
                            }
                        ]
                    }
                ];


                $scope.message = true;
                $scope.activeId = $scope.steps[0].videos[0].videoid;
                $scope.setActive = function(videoId) {
                    $scope.activeId = videoId;
                    $window.scroll(0,0);
                };


                // hack to get the first accordion to open on load
                $scope.isopen = true
            }
        ])

})(angular);