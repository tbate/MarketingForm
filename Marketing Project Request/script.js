$(document).on('focus', 'textarea', function(){
  document.getElementById("submit").disabled = false;
});

$(document).on('focus', 'input', function(){
  document.getElementById("submit").disabled = false;
});

function submit()
{
  buttonLock();
  alert("Form Submitted!");
}

function buttonLock()
{
  document.getElementById("submit").disabled = true;
}
