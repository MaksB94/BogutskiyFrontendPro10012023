import './app.scss'

function getPostById(id) {
    return new Promise(function(resolve, reject) {
        if (id < 1 || id > 100) {
            reject('ID має бути від 1 до 100');
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts/' + id)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    resolve(data);
                })
                .catch(function(error) {
                    reject('Помилка запиту: ' + error.message);
                });
        }
    });
}

function displayPost(post) {
    const postHtml = '<h2>' + post.title + '</h2><p>' + post.body + '</p>';
    document.getElementById('post').innerHTML = postHtml;

    const btnHtml = '<button id="comments-btn">Коментарі</button>';
    document.getElementById('comments').innerHTML = btnHtml;

    document.getElementById('comments-btn').addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
            .then(function(response) {
                return response.json();
            })
            .then(function(comments) {
                let commentsHtml = '<h3>Коментарі:</h3>';
                for (let i = 0; i < comments.length; i++) {
                    commentsHtml += '<p><strong>' + comments[i].name + ':</strong> ' + comments[i].body + '</p>';
                }
                document.getElementById('comments').innerHTML = commentsHtml;
            })
            .catch(function(error) {
                document.getElementById('comments').innerHTML = 'Помилка запиту: ' + error.message;
            });
    });
}

document.getElementById('search-btn').addEventListener('click', function() {
    const id = document.getElementById('post-id').value;
    getPostById(id)
        .then(function(post) {
            displayPost(post);
        })
        .catch(function(error) {
            document.getElementById('post').innerHTML = error;
            document.getElementById('comments').innerHTML = '';
        });
});
