
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 4000, 'Goodbye'));
const promise4 = fetch('http://jsonplaceholder.typicode.com/photos')
  .then(res => res.json())
  .then(data => {
    return imgUrl = data[0].thumbnailUrl;
  });

  Promise.all([promise1, promise2, promise3, promise4])
    .then((values) => console.log(values))
    .then(values => {
      document.getElementById('text').innerHTML = imgUrl;
    });
