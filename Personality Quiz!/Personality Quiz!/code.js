var catCount = 0;
var dogCount = 0;
var parrotCount = 0;
var hamsterCount = 0;
hideElement("cat");
hideElement("dog");
hideElement("hamster");
hideElement("parrot");
onEvent("startButton", "click", function( ) {
  setScreen("Q1Page");
});
onEvent("optionA", "click", function( ) {
 catCount = catCount + 1;
});
onEvent("optionA2", "click", function( ) {
 catCount = catCount + 1;
});
onEvent( "optionA3", "click", function( ) {
 catCount = catCount + 1;
});
onEvent("optionB", "click", function( ) {
 dogCount = dogCount + 1;
 
});
onEvent("optionB2", "click", function( ) {
 dogCount = dogCount + 1;
 
});
onEvent( "optionB3", "click", function( ) {
 dogCount = dogCount + 1;
 
});
onEvent("optionC", "click", function( ) {
 parrotCount = parrotCount + 1;
});
onEvent("optionC2", "click", function( ) {
 parrotCount = parrotCount + 1;
});
onEvent("optionC3", "click", function( ) {
 parrotCount = parrotCount + 1;
});
onEvent("optionD", "click", function( ) {
 hamsterCount = hamsterCount + 1;
});
onEvent("optionD2", "click", function( ) {
 hamsterCount = hamsterCount + 1;
});
onEvent("optionD3", "click", function( ) {
 hamsterCount = hamsterCount + 1;
});
onEvent("optionA", "click", function( ) {
  setScreen("Q2Page");
});
onEvent( "optionB", "click", function( ) {
  setScreen("Q2Page");
});
onEvent( "optionC", "click", function( ) {
  setScreen("Q2Page");
});
onEvent("optionD", "click", function( ) {
  setScreen("Q2Page");
});
onEvent("optionA2", "click", function( ) {
  setScreen("Q3Page");
});
onEvent("optionB2", "click", function( ) {
  setScreen("Q3Page");
});
onEvent( "optionC2", "click", function( ) {
  setScreen("Q3Page");
});
onEvent("optionD2", "click", function( ) {
  setScreen("Q3Page");
});
onEvent("optionA3", "click", function( ) {
  setScreen("endPage");
});
onEvent("optionB3", "click", function( ) {
  setScreen("endPage");
});
onEvent("optionC3", "click", function( ) {
  setScreen("endPage");
});
onEvent("optionD3", "click", function( ) {
  setScreen("endPage");
});
onEvent("revealButton", "click", function( ) {
  if (catCount > dogCount && catCount > hamsterCount && catCount > parrotCount) {
  showElement("cat");
  } else if (dogCount > catCount && dogCount > hamsterCount && dogCount > parrotCount) {
  showElement("dog");
  } else if (hamsterCount > dogCount && hamsterCount > catCount &&  hamsterCount > "parrotCount") {
    showElement("hamster");
  } else {
    showElement("parrot");
  }
});
