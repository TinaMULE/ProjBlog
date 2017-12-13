(function () {
    let appModule = angular.module('Blog');
    
    appModule.controller('LoginController', function($rootScope, $scope) {
        this.username = '';
        this.visible = true;
        
        this.loggedIn = () => {
            $rootScope.$broadcast('loggedIn');
            this.visible = false;
        };
        
        this.validateUsername = () => {
            if (this.username && this.username.length > 0) {
                localStorage.setItem('username', this.username);
                
                this.loggedIn();
                
            }
        };
        
        if (localStorage.hasOwnProperty('username')) {
            this.username = localStorage.getItem('username');
            setTimeout(() =>{
                $scope.$apply(() => this.loggedIn());
            });
        }
    });
})();

