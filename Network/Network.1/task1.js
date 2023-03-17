async function getUsers(names) {
    let urlStart = 'https://api.github.com/users/';
    let users = [];

    for (let userName of names) {
        let response = fetch(urlStart + userName).then(
            successResponse => {
            if (successResponse.status == 200) {
                return successResponse.json();
            } else {
                return null;
            }
            },
            failResponse => {
                return null;
            }
        );
        users.push(response);
    }
  
    let results = await Promise.all(users);

    return results;
}