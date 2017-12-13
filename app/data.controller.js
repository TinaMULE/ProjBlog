(function() {
	let app = angular.module('Blog');
	const KEY_ARTICLES = 'articles';

	app.controller('DataController', function($scope, DataService, ArticleService) {
        this.visible = false;
        this.msg = '';
        
        this.displayDataMsg = (show) => {
            this.visible = show;
            
            if (show == false) {
                this.msg = '';
            }
        };
        
        $scope.$on('saveBlog', () => {
            this.save();
            this.msg = 'Blog enregistré !';
            this.displayDataMsg(true);
        });
        
        $scope.$on('loadBlog', () => {
            this.load();
            this.msg = 'Blog chargé !';
            this.displayDataMsg(true);
        });
        
		this.save = () => {
			DataService.store(KEY_ARTICLES, ArticleService.list());
		};
		this.load = () => {
			let articles = DataService.fetch(KEY_ARTICLES);
			// Vider le tableau.
			ArticleService.articles.splice(0, ArticleService.articles.length);
			// Remplir le tableau.
			ArticleService.articles.push.apply(ArticleService.articles, articles);
		}
	});
})();