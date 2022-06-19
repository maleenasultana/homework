module.exports=(sequelize,Sequelize) => {

    const category = sequelize.define("book", {
    
          id: {
                type:Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement:true
          },
          name: {
                type: Sequelize.STRING,
                allowNull: false
          },
          description: {
                type: Sequelize.STRING
          },
          author: {
            type: Sequelize.STRING,
            allowNull: false
          },
          categoryName: {
            type: Sequelize.STRING,
            
          },
          cost: {
            type: Sequelize.INTEGER,
            allowNull:false
          }
    },
    
    
       {
          tableName: 'books'
       });
    
     return book;
    }

    