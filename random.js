const loadFriends = async () => {
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    displayFriends(data.results[0])
};
// loadFriends()

const displayFriends = friends => {
    // console.log(friends)
    const friendDiv = document.getElementById('friends-div')
    friendDiv.textContent = "";
    const div = document.createElement('div')
    div.innerHTML = `
        <img src="${friends.picture.large}">
        <h2>Name: ${friends.name.first} ${friends.name.last}</h2>  
        <h3>Age: ${friends.dob.age}</h3>
        <p>Email: ${friends.email}</p>
    `;
    friendDiv.appendChild(div)


}