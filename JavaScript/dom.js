document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
});
document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third');
    third.style.textAlign = 'center';
});

document.getElementById('add-new').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3>New Friend</h3>
    <p> something new added</p> 
    `
    friendContainer.appendChild(friend);
})