var romanTranslate = function(textInput) {
  var romans10 = ['I','X','C','M'];
  var romans5 = ['V','L','D']

  var numberEvaluate = function(number, position) {
    var numeral = "";
    if (number < 4) {
      numeral += romans10[position].repeat(number);
    } else if (number === 4) {
      numeral = romans10[position] + romans5[position];
    } else if (number < 9 && number > 4) {
      numeral += (romans5[position] + romans10[position].repeat(number-5));
    } else if (number === 9) {
      numeral = romans10[position] + romans10[position+1];
    } else {
    };
    return numeral;
  }

  if (parseInt(textInput) <= 3999  && /\D+/.test(textInput) !== true) {
    var revNumArray = parseInt(textInput).toString().split("").reverse();
    var outputNumeral = [];
    for (i=0; i < revNumArray.length; i++) {
      var number = parseInt(revNumArray[i]);
      outputNumeral.push(numberEvaluate(parseInt(revNumArray[i]), i));
    };
    var finalNumeral = outputNumeral.reverse().join("");
    return finalNumeral;
  } else {
      var textOutput = 'NOT A VALID NUMBA!!!!'
  }
  return textOutput;
};

$(function(){
  $("form.roman-form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#text-input").val();
    var textOutput = romanTranslate(textInput);
    $(".result").text(textOutput).slideDown();
  })
});
