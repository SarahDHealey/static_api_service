
$(document).ready(function() {
  $.get('http://localhost:3000', function(data){
    appendList = [];
        $('#container').append('<ul id="list">');
        $.each(data, function(index, value) {
          var linew = ($('<li>').html(value));
          $('#list').append(linew);
    });
  });
  $.get('http://localhost:3000/users', function(data){
    appendList = [];
    $('#activeUsersDoc').append('<ul id="list">');
    $.each(data, function(index, value) {
      var linew = ($('<li>').html(value));
      $('#list').append(linew);
    });
  });
});
