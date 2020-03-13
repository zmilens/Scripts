let a = prompt('Введите предполагаемый mail');
console.log(a);
let email = (/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);
let regex = new RegExp(email, 'g');
if (email.test(a)) {
    alert('email найден');
} else{
    alert('email не найден')
}
