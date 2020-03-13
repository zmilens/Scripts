let a = prompt('Введите предполагаемый url');
console.log(a);
let url = (/(((https?):\/\/)|(www\.))(.)/);
let regex = new RegExp(url, 'g');
if (url.test(a)) {
    alert('url найден');
} else{
    alert('url не найден')
}
