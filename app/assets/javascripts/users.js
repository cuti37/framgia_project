$(document).ready(function() {

  $('#form-login').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    var params = form.serialize();
    $.ajax({
      url: form.attr('action'),
      type: 'post',
      dataType: 'json',
      data: params,
    })
      .done(function(response) {
        if (response.status == 'success') {
          custom_toastr('success',response.message);
          location.href = "/";
        }else{
          custom_toastr('error',response.message);
        }
      })
      .fail(function() {
      })
      .always(function() {
      });
    return false;
  });

  $('#new_user').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var params = form.serialize();
    $.ajax({
      url: form.attr('action'),
      type: 'post',
      dataType: 'json',
      data: params,
    })
      .done(function(response) {
        if (response.status == 'success') {
          custom_toastr('success',response.message);
          location.href = response.location;
        }else{
          custom_toastr('error',response.message);
        }
      })
      .fail(function() {
      })
      .always(function() {
      });
    return false;
  });
});
