(function () {
   let appModule = angular.module('Blog');
    
    appModule.service('DataService', function (ArticleService) {
        this.store = (key, value) => {
            localStorage.setItem(key, JSON.stringify(value));
        };
        this.fetch = (key) => {
            let value;
            
            try{
                value = JSON.parse(localStorage.getItem(key));
            }catch (e){
                console.error(e);
                value = localStorage.getItem(key);
            };
            
            return value;
        };
    });
})();