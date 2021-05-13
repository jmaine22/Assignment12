const recipe = {
    title: 'Spaghetti',
    serving: 8,
    ingredients: ['1 pound ground beef', '1 onion, chopped', '1 small green bell pepper, diced', 
    '1 can of spaghetti sauce', 'spaghetti pasta'],
    output: function(){
        console.log( this.title + "\n " + 'Serves: ' + this.serving + "\n " + 'Ingredients: ' + this.ingredients);
    }
}
recipe.output();