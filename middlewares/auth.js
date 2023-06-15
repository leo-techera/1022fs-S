module.exports = (req, res, next)=>{
    if (!req.session.user) {
        res.json({msg: "no hay session registrada"})
    }else{
        next()
    }

}