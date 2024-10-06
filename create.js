document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const newUser = {
        name: document.getElementById('name').value,
        profession: document.getElementById('profession').value,
        image: document.getElementById('image').value,
        isOnline: document.getElementById('status').value === 'online'
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(() => {
            window.location.href = 'index.html';
        });
});
