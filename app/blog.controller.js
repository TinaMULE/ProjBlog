(function() {
    let appModule = angular.module('Blog');
    
    appModule.controller('BlogController', function($rootScope, $scope , ArticleService, ArticleFactory) {
        this.listVisible = false;
        this.formVisible = false;
        this.article = {};
        // ArticleService.mock(5);
        this.articles = ArticleService.list();
        
        this.displayArticleForm = (show) => {
            this.listVisible = !show;
            this.formVisible = show;
            
            if(!show) {
                this.article = {};
            }
        };
        
        $scope.$on('loggedIn', () => {
            this.listVisible = true;
        });
        
        this.subArticleForm = (article) => {
            
            if (this.article.id) {
                let index = this.articles.findIndex((article) => this.article.id === article.id);
                this.articles.splice(index, 1, this.article);
            }else {
                this.articles.push(ArticleFactory.create(this.article.title, this.article.description));
            }
            
            this.displayArticleForm(false);
        };
        
        this.editArticle = (article) => {
            this.displayArticleForm(true);
            this.article = ArticleFactory.clone(article);
        }
        
        this.deleteArticle = (articleId) => {
            ArticleService.delete(articleId);
        };
        
         this.save = () => {
             $rootScope.$broadcast('saveBlog');
         };
         
         this.load = () => {
             $rootScope.$broadcast('loadBlog');
         };
    });
})();