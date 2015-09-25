define(function() {

var foo = "foo"

angular.module( foo, [] )
.config([ "$routeProvider", function( $routeProvider ) {
    $routeProvider.when("/foo", {
        templateUrl: "foo.html",
        controller: "fooController as ctrl"
    })
}])
.run([function() {
    console.log( "module foo run." )
}])
.controller("fooController", [function() {
    this.me = "foo controller"
}])

return foo

})
