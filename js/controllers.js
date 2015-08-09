(function (angular, SC) {
    function MainController (getSongs) {
        var vm = this;
        vm.songs = [];
        SC.initialize({
            clientId: 'CLIENT_ID'
        });
        
        var onSongs = function (songs) {
            vm.songs = songs;
              songs.forEach(function (song) {
                 console.log(song);
                  
              });
        };
        
        getSongs(onSongs);
    }
    
    MainController.$inject = ['getSongs'];
    
    angular
        .module('uplifter')
        .controller('MainController', MainController);
}(angular, SC));