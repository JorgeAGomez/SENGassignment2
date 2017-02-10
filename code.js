//
// this is just a stub for a function you need to implement
//
function getStats(txt) {

    var numberChars = nChars(txt);
    var numberWords = nWords(txt);
    var numberLines = nLines(txt);
    var numberNonEmptyLines = nNonEmptyLines(txt);
    var numberLongestLine = maxLineLength(txt);
    var numberAvgWordLength = averageWordLength(txt);
    var palindromesList = palindromes(txt);
    var longestWordsList = longestWords(txt);
    var numberMostFrequentWords = mostFrequentWords(txt);

    answer = {
        nChars: numberChars,
        nWords: numberWords,
        nLines: numberLines,
        nNonEmptyLines: numberNonEmptyLines,
        averageWordLength: numberAvgWordLength,
        maxLineLength: numberLongestLine,
        palindromes: palindromesList,
        longestWords: longestWordsList,
        mostFrequentWords: numberMostFrequentWords
    };

    return answer;
}

//Gets the total number of characters in a text
function nChars(txt){
  var arrayTxt = txt.split("\n");
  var txtLength = 0;
  for (i = 0; i < arrayTxt.length; i++) {
     if (arrayTxt[i] != ""){
       txtLength = txtLength + arrayTxt[i].length
     }
  }
  return txtLength;
}

//Gets the total number of words in a text
function nWords(txt){
  var arrayTxt = txt.split(/\W+/);
  var numWords = 0;
  for (i = 0; i < arrayTxt.length; i++) {
    if (arrayTxt[i].length != 0) {
      numWords = numWords + 1;
    }
  }
  return numWords;
}

//Gets the number of lines in a text
function nLines(txt){
  var arrayTxt = txt.split("\n");
  var numLines = arrayTxt.length;
  if(arrayTxt.length == 1 && arrayTxt[0] == ""){
      numLines = 0;
  }
  return numLines;
}

//Gets the number of lines in a text containing at least one visible character
function nNonEmptyLines(txt){
  var arrayTxt = txt.split("\n");
  var numNonEmpty = 0;
  for (i = 0; i < arrayTxt.length; i++){
    if (arrayTxt[i].match(/[a-z]/)){
      //console.log(i);
      numNonEmpty = numNonEmpty + 1;
    }
  }
  return numNonEmpty;
}

//Gets the length of the longest line in a text
function maxLineLength(txt){
  var arrayTxt = txt.split("\n");
  var longestLine = arrayTxt[0];

  for (i = 1; i < arrayTxt.length; i++){
    if (longestLine.length < arrayTxt[i].length){
      longestLine = arrayTxt[i];
    }
  }
   return longestLine.length;
  }

//Gets the average word length in a text
function averageWordLength(txt){
  var arrayTxt = txt.split(/\W+/);
  var avg = 0;
  var divideBy = 0;
  for(i = 0; i < arrayTxt.length; i++){
    if (arrayTxt[i] != ""){
      avg = avg + arrayTxt[i].length;
      divideBy = divideBy + 1;
    }
  }
  avg = avg / divideBy;
  return avg;
}

function palindromes(txt){
  var lowerCase = txt.toLowerCase();
  var palindromes = [];
  var arrayTxt = lowerCase.split(/\W+/);
  for(i = 0; i < arrayTxt.length; i++){
    if (arrayTxt[i].length > 2 && arrayTxt[i] == arrayTxt[i].split('').reverse().join('')){
      var add = true;
      for(j = 0; j < palindromes.length; j++){
        if (arrayTxt[i] == palindromes[j]){
          add = false;
        }
      }
      if (add){
        palindromes.push(arrayTxt[i]);
      }
    }
  }
  return palindromes;
}

//Gets the 10 longest words in a text
function longestWords(txt){
  var currentLongest = [];
  var result = [];
  var arrayTxt = txt.split(/\W+/);
  arrayTxt.sort()

  for (i = 0; i < arrayTxt.length; i++) {
    currentLongest.push(arrayTxt[i].length);
  }

  while(result.length < 10){
    var max = Math.max.apply(null, currentLongest);
    var getIndex = currentLongest.indexOf(max);
    var add = true;
    if(getIndex == -1){
      break;
    } else {
        for (j = 0; j < result.length; j++){
          if(result[j] == arrayTxt[getIndex]){
            currentLongest.splice(getIndex,1);
            arrayTxt.splice(getIndex,1);
            add = false;
          } else{
            add = true;
          }
        }
        if(add){
          result.push(arrayTxt[getIndex]);
        }
    }
  }
  return result;
}

//Gets the 10 most frequent words in a text
function mostFrequentWords(txt){
  var arrayTxt = txt.toLowerCase().split(/\W+/);
  var mostFrenquestResult = [];
  var mostFrenquestNum = [];
  var dic = {};
  var result = [];
  arrayTxt.sort();


  for (i = 0; i < arrayTxt.length; i++){
    dic[arrayTxt[i]] = 0;
  }

  for (j = 0; j < arrayTxt.length; j++){
    if(arrayTxt[j] in dic){
      dic[arrayTxt[j]] = dic[arrayTxt[j]] + 1;
    }
  }


  while(mostFrenquestResult.length < 10){
    var func = Object.keys(dic).map(function (key) { return dic[key]; });
    var maximum = Math.max.apply(null,func);
    if(maximum != -Infinity){
      var newKeyy = Object.keys(dic).find(key => dic[key] === maximum);
      if(newKeyy != ""){
        mostFrenquestResult.push(newKeyy + "(" + maximum + ")");
      }
      delete dic[newKeyy];
    }
  }
  console.log(mostFrenquestResult);
  return mostFrenquestResult;
}
