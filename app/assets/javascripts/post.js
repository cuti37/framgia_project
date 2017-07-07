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
  });

  jQuery(document).ready(function($) {
    $('body').on('submit','.new_post', function(event) {
      event.preventDefault();
      var form = $(this);
      var url = form.attr('action');
      var params = form.serialize();
      var type = form.attr('method');
      var picture = form.find('#post_picture').val();
      console.log(picture);
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
          form.find('#post_title').val('');
          form.find('#post_content').val('');
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
jQuery(document).ready(function($) {
    $('body').on('click', '.edit-post', function(event) {
      event.preventDefault();
      var post = $(this);
      var link = post.attr('href');
      var post_id = post.data('id');
      var form = $('#post-form').find('#save');

      $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        data: {post_id: post_id},
      })
      .done(function(res) {
        if(res.status == "success"){
          $('#post-form').html(res.html);
        }
      })
      .fail(function() {
      })
      .always(function() {
      });
    });
    return false;
  });

  jQuery(document).ready(function($) {
    $('body').on('submit', '.edit_post', function(event) {
      event.preventDefault();
      var form = $(this);
      var url = form.attr('action');
      var params = form.serialize();
      var type = form.attr('method');
      var picture = form.find('#post_picture').val();
      $.ajax({
        url: url,
        type: 'PATCH',
        dataType: 'json',
        data: params,
      })
      .done(function(data) {
        if (data.status == 'success') {
          $('.list-post-'+data.post_id).html(data.res);
          custom_toastr('success', "Update complete!");
          form.find('#post_title').val('');
          form.find('#post_content').val('');
          form.attr('class', 'new_post');
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

  jQuery(document).ready(function($) {
    $('body').on('click', '.delete-post', function(event) {
      event.preventDefault();
      var post = $(this);
      var link = post.attr('href');
      var post_id = post.data('id');
      var form = $('#post-form').find('#save');
      var cf = confirm('You sure?');
      if(cf == true){
        $.ajax({
          url: link,
          type: 'DELETE',
          dataType: 'json',
          data: {post_id: post_id},
        })
        .done(function(res) {
          if(res.status == "success"){
            $('.list-post-'+post_id).fadeOut();
          }
        })
        .fail(function() {
        })
        .always(function() {
        });
        }
    });
    return false;
  });
});
