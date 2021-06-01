// main.js

//imports
import  { RESULTS } from './utilities/musicLibrary.js'

// Globals
const inputField = document.getElementById("search");
const resultsArea = document.getElementById("search-results");

/**
 * Creating elements and appending title and description
 *
 * @param { String } title - Object title
 * @param { String } description - Object description
 * @return {*} - Element
 */
function createResultElement(title, description) {

    const liEle = document.createElement('li')

    // article
    const articleEle = document.createElement('article')
    articleEle.classList.add("search-result")

    // Header for title
    const headerEle = document.createElement('header')
    headerEle.classList.add("search-result-header", "search-result-section")
    headerEle.textContent = title

    // Div for description
    const divEle = document.createElement('div')
    divEle.classList.add("search-result-body", "search-result-section")
    divEle.textContent = description
    
    // Appending elements
    articleEle.appendChild(headerEle)
    articleEle.appendChild(divEle)
    liEle.appendChild(articleEle)

    return liEle
}

/**
 * Searching an array of objects after inserted value
 *
 * @param { String } querySearch - User inputed value.
 * @return { Array{} } resultArray - All object that fit the search.
 */
function findResult(querySearch) {
    let resultArray = []
    querySearch = querySearch.toLowerCase()

    // Searching RESULTS if includes inputed value.
        RESULTS.forEach(item => {
            if(item.title.toLowerCase().includes(querySearch) || item.description.toLowerCase().includes(querySearch)){
            resultArray.push(item)
        }})

    return resultArray
}

// Adding eventlistener on keyup
inputField.addEventListener("keyup", function(event){
    const results = findResult(event.target.value);
    // clear previous results
    resultsArea.innerHTML = '';

    // convert all results objects to HTML elements and push them to our "resultsArea" div.
    if (results) {
        results.forEach(item => resultsArea.appendChild(createResultElement(
            item.title,
            item.description
        )));
    } else {
        console.log('No matches')
    }
});