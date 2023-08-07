function skillsMember() {
    var skills = {
        name: 'JavaScript',
        age: 20,
        coding: function () {
            console.log('Coding JavaScript');
        }
    };
    console.log(skills.name);
    console.log(skills.age);
    console.log(skills.coding());
}