(function(){
    angular
        .module("MovieApp")
        .controller("DetailsController", detailsController);

    function detailsController($scope, $routeParams, OmdbService) {
        $scope.imdbID = $routeParams.imdbID;

        OmdbService.findMovieByImdbId($scope.imdbID, render)

        function render(response) {
            $scope.movie = response;
        }
    }
})();