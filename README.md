# Which Cocktail Are You?
This Minimum Viable Product is a Buzzfeed-style quiz that will ask you personality questions to determine which cocktail fits your persona. Upon receiving the result you will get a link to a tutorial video on the history of and/or how to make said cocktail.

## Tech/framework used

**Built With**
- Javascript
- Node.js
- React
- Express
- MySQL

* MySQL database stores the different types of cocktails with descriptions and links. An Express server connects the database to the React driven front-end.
* The resulting cocktail will be based on a point system corresponding to a specific category.
* Any ties will be determined by an algorithm to mix corresponding types of cocktails.
  * For example if someone scores 4 on old fashioned and 4 on gin & tonic, I will not have a default winner but instead choose something fitting between the two, like a Tom Collins.