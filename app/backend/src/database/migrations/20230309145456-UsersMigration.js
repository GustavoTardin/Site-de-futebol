module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            role: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        })
    },

    down: async (queryInterface, _Sequelize) => {

         await queryInterface.dropTable('users');

    }
};