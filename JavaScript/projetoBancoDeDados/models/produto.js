
module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('produtos', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'produtos'
    });
    return Produto;
};
