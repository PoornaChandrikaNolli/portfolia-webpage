document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (message) {
        const recommendationList = document.getElementById('recommendation-list');
        const newRecommendation = document.createElement('div');
        newRecommendation.className = 'recommendation';
        newRecommendation.innerHTML = `<p>${message}</p>`;

        if (name) {
            newRecommendation.innerHTML += `<p><strong>- ${name}</strong></p>`;
        }

        recommendationList.appendChild(newRecommendation);

        alert('Recommendation added successfully!');

        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please enter a message.');
    }
});
