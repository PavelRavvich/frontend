// Ждем когда загрузится DOM
$(function() {
  // Инициализация плагина на форме
  // Форма имеет атрибут "registration"
  $("form[name='registration']").validate({
    // Правила проверки полей
    rules: {
      // Ключ с левой стороны это название полей формы.
      // Правила валидации находятся с правой стороны
      name: "required",
      email: {
        required: true,
        // Отдельное правило для проверки email
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Установка сообщений об ошибке
    messages: {
      name: "required",
      password: {
        required: "required",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});