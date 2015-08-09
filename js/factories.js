(function (angular) {
    function getSongs () {
        return function (limit, cb) {
            SC.get('/tracks', {
                limit: limit,
                async: true
            }, cb);
        }
    }
    
    angular
        .module('uplifter')
        .factory('getSongs', getSongs);
}(angular));