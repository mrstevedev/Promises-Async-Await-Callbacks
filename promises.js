const posts = [
  { title: 'Post Four', body: 'This is post four' },
  { title: 'Post Five', body: 'This is post five' }
];

function getPosts() {
  setTimeout(() => {
    output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const err = false;
      if(!err) {
        resolve();
      } else {
        reject('Error something went wrong');
      }
    }, 2000);
  });
}

// async function init() {
//   await createPost({ title: 'Post Six', body: 'This is post six' });
//
//   getPosts();
// }
// init();

// Async / Await Fetch
// async function fetchUsers() {
//   const res = await fetch('http://jsonplaceholder.typicode.com/photos');
//
//   const data = await res.json();
//   console.log(data);
// }
//
// fetchUsers();

createPost({ title: 'Post Six', body: 'This is post six' })
  .then(getPosts)
  .catch(err => console.log(err));

  
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, 'Goodbye'));
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
