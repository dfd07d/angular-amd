define([
    "./foo/foo",
    "./bar/bar",
], function( foo, bar ) {

var app = "app"

angular.module( app, [ "ngRoute", "ngCookies", foo, bar ] )

return app
})
