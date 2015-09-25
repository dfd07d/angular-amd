define(function() {

var bar = "bar"

angular.module( bar, [] )
.config([ "$routeProvider", function( $routeProvider ) {
    $routeProvider.when("/bar", {
        templateUrl: "bar.html",
        controller: "barController as ctrl"
    })
}])
.run([function() {
    console.log( "module bar run." )
}])
.controller("barController", [function() {
    this.me = "bar controller"
}])

return bar

})
