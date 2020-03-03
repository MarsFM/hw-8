"use strict";var commonPassword="",successFields=[],form=document.querySelector(".form"),btn=document.querySelector(".form__submit"),inputName=document.querySelector(".form__name"),inputEmail=document.querySelector(".form__email"),inputPassword=document.querySelector(".form__password"),inputCheckPassword=document.querySelector(".form__checkpassword"),successField=document.querySelector(".success_registration"),errorsFields={name:!1,email:!1,password:!1,check_password:!1};form.addEventListener("submit",function(e){e.preventDefault();var s=this.elements,r=s.name,i=s.email,t=s.password,a=s.check_password;if(errorsFields.name&&""!==r.value||(toggleField(r,"fail","success"),shackerButton(inputName)),errorsFields.email&&""!==i.value||(toggleField(i,"fail","success"),shackerButton(inputEmail)),errorsFields.password&&""!==t.value||(toggleField(t,"fail","success"),shackerButton(inputPassword)),errorsFields.check_password&&""!==a.value||(toggleField(a,"fail","success"),shackerButton(inputCheckPassword)),errorsFields.name&&errorsFields.email&&errorsFields.password&&errorsFields.check_password){var c=JSON.parse(localStorage.getItem("users"))||[];for(var l in c.push({name:r.value,email:i.value,password:t.value}),localStorage.setItem("users",JSON.stringify(c)),showSuccessRegistration(),clearField(inputName,"success"),clearField(inputEmail,"success"),clearField(inputPassword,"success"),clearField(inputCheckPassword,"success"),inputName.value="",inputEmail.value="",inputPassword.value="",inputCheckPassword.value="",errorsFields)errorsFields[l]=!1}}),inputName.addEventListener("input",function(e){var s=e.currentTarget.value;if(!s)return clearField(this,"fail"),void clearField(this,"success");s.match(/^[а-яЁё\w]{5,10}$/i)&&!checkUser(s)?(toggleField(this,"success","fail"),errorsFields.name=!0):(toggleField(this,"fail","success"),errorsFields.name=!1)}),inputEmail.addEventListener("input",function(e){var s=e.currentTarget.value;if(!s)return clearField(this,"fail"),void clearField(this,"success");s.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)?(toggleField(this,"success","fail"),errorsFields.email=!0):(toggleField(this,"fail","success"),errorsFields.email=!1)}),inputPassword.addEventListener("input",function(e){var s=e.currentTarget.value;if(!s)return clearField(this,"fail"),void clearField(this,"success");s.match(/^(?=.*[A-Z])(?=.*\d)(?!.*\s)[\w!@#$%^&]{10,}$/)?(toggleField(this,"success","fail"),commonPassword=s,errorsFields.password=!0):(toggleField(this,"fail","success"),errorsFields.password=!1)}),inputCheckPassword.addEventListener("input",function(e){var s=e.currentTarget.value;if(!s)return clearField(this,"fail"),void clearField(this,"success");s===commonPassword?(toggleField(this,"success","fail"),errorsFields.check_password=!0):(toggleField(this,"fail","success"),errorsFields.check_password=!1)});var toggleField=function(e,s,r){e.classList.add(s),e.classList.remove(r),e.previousElementSibling.classList.add("form__icon_".concat(s)),e.previousElementSibling.classList.remove("form__icon_".concat(r))},clearField=function(e,s){e.classList.remove(s),e.previousElementSibling.classList.remove("form__icon_".concat(s))},shackerButton=function(e){e.classList.add("shake"),setTimeout(function(){e.classList.remove("shake")},1e3)},showSuccessRegistration=function(){successField.classList.add("show"),setTimeout(function(){successField.classList.remove("show")},2e3)},checkUser=function(e){for(var s=JSON.parse(localStorage.getItem("users"))||[],r=new RegExp("^".concat(e)),i=0;i<s.length;i++)if(r.test(s[i].name))return!0;return!1};
//# sourceMappingURL=main.js.map
