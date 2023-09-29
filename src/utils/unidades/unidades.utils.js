module.exports = {
    async filtoBodyPost(req, res) {
        const { nickname, address, brand, model, active } = req.body;
        if (!nickname || !address || !brand || !model || !active) { //verifica se todos os fields vem no body
            res.status(400)

        }
    },
    async filtoBodyPut(req, res) {

        const { nickname, address, brand, model, active } = req.body;
        const { id } = req.params
        const dadoNovo = {}

        if (isNaN(id)) { //Verifica se o id e numerico
            res.status(400)
            throw new Error(`O id : ${id} informado por params não e numerico`)
        }
        if(nickname){
            dadoNovo.nickname = nickname
        }
        if(address){
            dadoNovo.address = address
        }
        if(brand){
            dadoNovo.brand = brand
        }
        if(model){
            dadoNovo.model = model
        }
        if(active){
            dadoNovo.active = active
        }


        if (dadoNovo.length < 1) { //verifica se todos os fields vem no body
            res.status(400)
            throw new Error('Todos os campos são obrigatórios para atualizar uma nova unidade , fields validos : id, nickname, address, brand, model, active')
        }

    },
    async filtroParamsDelete(req, res){
        const { id } = req.params
        if (isNaN(id)) { //Verifica se o id e numerico
            res.status(400)
            throw new Error(`O id : ${id} informado por params não e numerico`)
        }

    }
}