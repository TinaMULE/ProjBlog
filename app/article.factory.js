(function () {
    let appModule = angular.module('Blog');
    
    appModule.factory('ArticleFactory', function() {
        let af = {
            id: 1,
            create: (title, descr) => {
                return {
                    title: title || 'Article n°' + af.id,
                    id: af.id++,
                    description: descr || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan nibh nisi, nec accumsan augue luctus eu. Donec fermentum porttitor ipsum, ut pellentesque turpis tincidunt vitae. Nam quis porta turpis. Sed condimentum tellus metus, posuere mattis est vulputate at. In sed facilisis ipsum. Integer laoreet ante libero. Phasellus semper viverra turpis. Mauris eu porttitor eros. Sed eget dui eu risus bibendum interdum ac at metus. Morbi metus lacus, porta pellentesque diam a, consectetur posuere erat. Duis eget molestie dui. Phasellus scelerisque lacinia mattis.'
                };
            },
            
            clone: (article) => {
                let clone = {};
                
                clone.id = article.id;
                clone.title = article.title;
                clone.description = article.description;
                return clone;
            }
            
        };
        return af;
        
    });
})();