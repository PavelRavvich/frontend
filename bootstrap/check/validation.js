$(function() {
  // Form contain attribute name="registration".
  $("form[name='validation']").validate({

    rules: {
      name: {
        required: true,
        minlength: 5
      }
    },

    // Error message.
    messages: {
      name: "Error"
    },

    submitHandler: function(form) {
      form.submit();
    }
  });
});