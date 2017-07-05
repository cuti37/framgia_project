jQuery(document).ready(function($) {
  $('.panel-body').on('click', '.title-post', function(event) {
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
        $('#myModal2').html(res.html);
        $('#myModal2').modal();
      }
    })
    .fail(function() {
    })
    .always(function() {
    });
  });
  return false;
});
