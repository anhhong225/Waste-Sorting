const wasteItemController = require("../controllers/wasteItemController");

module.exports = app => {
    app
        .route('/waste-item')
        .get(wasteItemController.getItems)
        .post(wasteItemController.createItem);

    app
        .route('/waste-item/:itemId')
        .get(wasteItemController.getAItem)
        .put(wasteItemController.updateItem)
        .delete(wasteItemController.deleteItem);
};


