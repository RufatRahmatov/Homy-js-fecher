
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            const userCardsContainer = document.querySelector('.grid');
            data.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card', 'transform', 'hover:scale-105', 'transition-transform', 'duration-300');
                userCard.innerHTML = `
                    <img src="${user.image}" class="w-full h-auto object-cover rounded" alt="${user.name}">
                    <div class="p-4 text-center">
                        <h2 class="text-xl font-semibold">${user.name}</h2>
                        <p class="text-gray-500">${user.profession}</p>
                        <div class="mt-2">
                            <span class="inline-block w-3 h-3 rounded-full ${user.isOnline ? 'bg-green-500' : 'bg-red-500'}"></span>
                        </div>
                        <button class="mt-4 px-3 py-1 bg-red-500 text-white rounded delete-btn" data-id="${user.id}">Delete</button>
                    </div>
                `;
                userCardsContainer.appendChild(userCard);
            });
            addDeleteHandlers();
        });
});

function addDeleteHandlers() {
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const userId = event.target.dataset.id;
            fetch(`http://localhost:3000/users/${userId}`, {
                method: 'DELETE'
            })
                .then(() => {
                    event.target.closest('.user-card').remove();
                });
        });
    });
}



