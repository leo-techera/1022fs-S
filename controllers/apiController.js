// const hello = (req , res) => {
//     res.send('Helloooooooooooo!')
// }

// module.exports = {hello}

const {Team} = require ('../models/teams')


class ApiController {
    hello (req, res) {
        res.send('Helloooooo')
    }
    async verListado (req, res){
        // res.status(200).json({
        //     objeto1: "asado",
        //     objeto2: "milanesa"
        // })

        // traigo la constante equiposDeFutbol, le agrego async y await, llamo a Team y utilizo un metodo de mongoose que me traiga todos los equipos que haya guardado .find()
        const equiposDeFutbol = await Team.find()
        res.status(200).json(equiposDeFutbol)
    }
    // para buscar equipo por categoria
    async listadoPorCategoria (req, res){
        const equiposDeFutbol = await Team.find({categoria: req.params.categoria})
        res.status(200).json(equiposDeFutbol)
    }
    // para buscar por id
    async buscarPorId (req, res){
        const equiposDeFutbol = await Team.findById(req.params.id)
        res.status(200).json(equiposDeFutbol)
    }
    async buscarClub (req, res){
        const equiposDeFutbol = await Team.findOne({nombre: req.params.nombre})
        res.status(200).json(equiposDeFutbol)
    }
    async crear (req, res){
        // res.status(201).json({
        //     msg: "se guardó el objeto tanto",
        //     obj: req.body
        // })
        try {
            const equipoGuardado = new Team(req.body)
            await equipoGuardado.save()
            res.status(201).json(equipoGuardado)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async editar (req, res){
        try {
            await Team.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({
                msg: "el equipo con id" + req.params.id + "se actualizó"
            })
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async borrar (req, res){
        await Team.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: "el equipo con id" + req.params.id + "se borró"
        })
}
}

module.exports = new ApiController

/*

ecomerce - tienda

banco

modelo - origen
modelo  vista

estudiar un poco de aplicar seguridad a la pag web


*/