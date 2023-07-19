
const cancelOrderhandler = (req, res)=>{
    res.status(200).end('Estoy en el handler de cancelar orden')
}

module.exports = cancelOrderhandler;