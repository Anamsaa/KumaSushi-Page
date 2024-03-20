document.getElementById('openCommentBox').addEventListener('click', function() {
    document.getElementById('commentBox').style.display = 'block';
});

document.getElementById('closeCommentBox').addEventListener('click', function() {
    document.getElementById('commentBox').style.display = 'none';
});

document.getElementById('submitComment').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
    var rating = document.querySelector('.star.active').getAttribute('data-value');

    var commentElement = document.createElement('div');
    commentElement.innerHTML = '<strong>' + name + '</strong>: ' + comment + ' - ' + rating + ' estrellas';
    document.getElementById('comments').appendChild(commentElement);

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    document.querySelectorAll('.star').forEach(function(star) {
        star.classList.remove('active');
    });

    document.getElementById('commentBox').style.display = 'none';
});

document.querySelectorAll('.star').forEach(function(star) {
    star.addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(function(s) {
            s.classList.remove('active');
        });
        for (var i = 1; i <= value; i++) {
            document.querySelector('.star[data-value="' + i + '"]').classList.add('active');
        }
    });
});
