
const createOrderHandler = (req, res)=>{
    res.status(200).end('Estoy en el handler de crear orden')
};

module.exports = createOrderHandler;