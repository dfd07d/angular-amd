require.config({
    paths: {
        angular: "./../../bower_components/angular/index",
        "angular/route": "./../../bower_components/angular-route/index",
        "angular/cookies": "./../../bower_components/angular-cookies/index"
    },

    shim: {
        angular: {
            "exports": "angular"
        }
    },

    deps: [ "./boot" ]
})

