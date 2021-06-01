// main.js

//imports
import  { RESULTS } from './utilities/musicLibrary.js'

console.log(RESULTS)

// input field
const inputField = document.getElementById("search");

// <ul> element to put search results in
const resultsArea = document.getElementById("search-results");

/*

Finish this function, it should return a HTML element that looks like this:

<li>
    <article class="search-result">
        <header class="search-result-header search-result-section">
            Cool movie (title)
        </header>
        <div class="search-result-body search-result-section">
            This is some information about this result. (description)
        </div>
    </article>
</li>
*/
function createResultElement(title, description) {
    console.log("This function is not implemented."); 
    //Creating and setting class to li
    const liTag = document.createElement('li')
    //Creating and setting class to article
    const articleTag = document.createElement('article')

}

/**
 * Searching an array after inserted value
 *
 * @param { String } querySearch - User inputed value.
 * @return { Array{} } resultArray -   
 */
function findResult(querySearch) {
    let resultArray = []
    querySearch = querySearch.toLowerCase()

    // Searching RESULTS if includes inputed value.
    RESULTS.forEach(item=> {
        if(item.title.toLowerCase().includes(querySearch) || item.description.toLowerCase().includes(querySearch)){
            resultArray.push(item)
        }})
    return resultArray
}

// Adding eventlistener on keyup
inputField.addEventListener("keyup", function(event){
    const results = findResult(event.target.value);
    console.log(results)
    // clear previous results
    resultsArea.innerHTML = '';

    // convert all results objects to HTML elements and push them to our "resultsArea" div.
    if (results) {
        results.forEach(result => resultsArea.appendChild(createResultElement(
            result.title,
            result.description
        )));
    } else {
        console.log("No results.");
    }
});