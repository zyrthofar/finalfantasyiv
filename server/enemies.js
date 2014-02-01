var enemies = [
    { id: 1, name: 'Goblin', hitPoints: '6' },
    { id: 2, name: 'Treebeard', hitPoints: '1000' },
    { id: 3, name: 'Nathan Boyle', hitPoints: '344' },
    { id: 4, name: 'King of Mexico', hitPoints: '3426' }
];

exports.getById = function(id) {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].id == id) {
            return enemies[i];
        }
    }

    return null;
};

exports.getAll = function() {
    return enemies;
};