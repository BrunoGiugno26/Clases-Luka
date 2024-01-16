export const getUsers = (req,res) =>{
    const limite = req.query.limite
    const nombre = req.query.nombre

    res.json({mesagge:"Lista de ususarios",limite,nombre})
}

export const getUser = (req,res) =>{
    const id = req.params.id
    const limite = req.query.limite

    res.json({message: "Informacion del usuario",id,limite})
}