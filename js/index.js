var string = ""

$('span').click(function() {
  var selection = $(this).text()
  if (selection!='=') {
    string+=selection
  }
  $('#screen').text(string)
})

$('#clear').click(function() {
  string=""
  $('#screen').text(string)
})

$('#equals').click(function() {
  string=string.replace('x', '*')
  string=string.replace('\xF7','/')
  var answer = eval(string)
  $('#screen').text(answer)
  if ($('#screen').text() ==='Infinity') {
    $('#screen').text("Error")
  }
})
