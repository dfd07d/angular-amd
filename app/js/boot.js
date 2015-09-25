require([ "angular" ], function( angular ) {

    require([
        "angular/route",
        "angular/cookies",
    ], function() {

        require([ "./app" ], function( app ) {
            angular.element( document )
            .ready(function() {
                angular.bootstrap( document, [ app ] )
            })
        })
    })
})

