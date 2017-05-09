System.register(["./enzo/enzo.service", "./weather/weather.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var enzo_service_1, weather_service_1;
    return {
        setters: [
            function (enzo_service_1_1) {
                enzo_service_1 = enzo_service_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }
        ],
        execute: function () {
            enzo_service_1.enzoWorking();
            weather_service_1.weatherWorking();
            console.log('Managed to load main');
        }
    };
});
//# sourceMappingURL=main.js.map