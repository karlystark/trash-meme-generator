/* ============= ELEMENT SELECTORS ================ */

const form = document.querySelector("form");
const urlInput = document.querySelector('input[name="url_submission"]');
const topTextInput = document.querySelector('input[name="top_text_input"]');
const bottomTextInput = document.querySelector('input[name="bottom_text_input"]');
const results = document.querySelector('.results');



/* ============= EVENT LISTENER - SUBMISSION ================ */

form.addEventListener('submit', function(e){

  // Prevent page reload

  e.preventDefault();

  // Make sure that user inputs a url and at least one text input

  if(urlInput.value === ''){
    return alert("Sorry, we need an image URL to make our trash.");
  }

  if(topTextInput.value === '' && bottomTextInput.value === ''){
    return alert("Sorry, we need at least one text input here!");
  }

  // Create new variable called newMeme and assign to it the evaluated result of calling makeMeme

  const newMeme = makeMeme(urlInput, topTextInput, bottomTextInput);

  // Append the result/newMeme to the results variable/div

  results.append(newMeme);

  // Clear the form after each submit

  formClear(urlInput, topTextInput, bottomTextInput);

});


/* ============= FUNCTION TO CREATE MEME ================ */

function makeMeme(urlInput, topText, bottomText){

  // Create a memeContainer variable to hold each submitted input collection aka meme recipe

  const memeContainer = document.createElement('div');
  memeContainer.classList.add("meme_item")

  // Create new HTML elements and set their values to the input items

  const img = document.createElement('img');
  img.classList.add("meme_image");
  img.src = urlInput.value;

  const top = document.createElement('div');
  top.classList.add("top_text");
  top.innerText = topTextInput.value.toUpperCase();

  const bottom = document.createElement('div');
  bottom.classList.add("bottom_text");
  bottom.innerText = bottomTextInput.value.toUpperCase();


  const deleteButton = document.createElement('button');
  deleteButton.classList.add("delete_button");
  deleteButton.innerText = "X";


  // Append the elements to the new meme container to create the meme

  memeContainer.append(img, top, bottom, deleteButton);

  // Append created meme to our results div and return the memeContainer out of the function

  results.append(memeContainer);
  return memeContainer;

}


/* ============= FUNCTION TO CLEAR THE FORM ================ */

function formClear (urlInput, topText, bottomText){
  urlInput.value = "";
  topText.value = "";
  bottomText.value = "";
};



/* ============= FUNCTION TO DELETE MEME ================ */

//Add a "click" event listener to results and check if the click happened on the delete button
//If so, remove the parent element of the delete button (memeContainer)


results.addEventListener('click', function(e){
  if(e.target.className === 'delete_button'){
    e.target.parentElement.remove();
}
});


