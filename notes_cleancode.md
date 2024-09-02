# clean code
## naming conventions
* camelCase is best used in javascript
* true constants can be set in all caps, e.g., const ONE_HOUR = 3600000;
* give descriptive names
* use consistent vocab: 
    * inconsistent example:
        * function getPlayerScore()
        * function fetchGamerName()
    * consistent example:
        * function getPlayerScore()
        * function getPlayerName()
* functions start with a verb
* variables are nouns

## other conventions
* don't set magic values (numbers in functions). bad example: setTimeout(stopTimer, 3600000);
* stick below 80 characters line length
* use semicolons in JavaScript
* use comments to provide reasons behind a piece of code, not pseudocode

## web article
* revise logic before coding: flow diagrams or pseudocode
* break up large functions into smaller ones