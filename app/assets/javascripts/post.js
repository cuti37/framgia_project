$(document).on('turbolinks:load', function(){

  jQuery(document).ready(function($) {
    $('body').on('click', '.title-post', function(event) {
      event.preventDefault();
      var post = $(this).closest('.pointer');
      var link = post.find('.title-post').attr('href');
      var post_id = post.find('.title-post').data('id');
      $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        data: {post_id: post_id},
      })
      .done(function(res) {
        if(res.status == "success"){
          // $('#show-content').text(res.content);
          // console.log(res.html);
          $('#myModal2').modal();
          $('#myModal2').html(res.html);
        }
      })
      .fail(function() {
      })
      .always(function() {
      });
    });
    return false;
  })

  jQuery(document).ready(function($) {
    $('#post-form').on('submit', function(event) {
      event.preventDefault();
      var form = $(this);
      var url = form.attr('action');
      var params = form.serialize();
      var type = form.attr('method');

      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: params,
      })
      .done(function(data) {
        if (data.status == 'success') {
          $('#list-post').prepend(data.res);
          custom_toastr('success', "Post complete!");
        } else {
          $.each(data.res,function(index, el) {
            custom_toastr('error',el);
          });
        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
      return false;
    });
  });
});
