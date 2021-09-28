const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = '14f3b054158401af81e4ab4921bd8445f2bc46b80e6777f387ad7c38bb32f52a';
const bcrypt = require('bcrypt');

function generateToken(params = {}){
    return jwt.sign( params, secret, {expiresIn:'6h'});
}


module.exports = {

    //Retorna todos os usuários
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },
    //Retorna apenas o user que for referenciado por id
    async details(req, res) {
        const users = await User.findOne({
            where: { 
                id: req.params.id
            }
        });
        return res.json(users);
    },

    //Vai armazenar o usuário
    async create(req, res) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const { name, email, password, tipo_user } = req.body;

        const user = await User.create({ name, email, password:hashedPassword, tipo_user });

        res.status(200).json(user);
    },
    async update(req, res) {
        const { name, email, password, tipo_user } = req.body;

        const user = await User.update(
            { name, email, password, tipo_user }, { 
                where: { 
                    id: req.params.id
                }
            });
            res.status(200).json(user);
    },
    async delete(req, res) {
        const { name, email, password, tipo_user } = req.body;
        const user = await User.destroy({
            where: { 
                id: req.params.id
            }
        });
        res.status(200).json(user);
    },

    async login(req, res){
        const {email, password} = req.body;
        const userExist = await User.findOne({ where: {email} }, function(err,user){
            if(err) {
                console.log(err);
                res.status(200).json({erro: 'Erro no servidor. Por favor, tente novamente'});
            }
        });

        if(!userExist){
            return res.status(200).json({
                status:2,
                error: "E-mail não encontrado!"
            })
        }
        if(!(await bcrypt.compare(password, userExist.password))){
            return res.status(200).json({
                status:2,
                error: "Senha Inválida!"
            });
        }else{
            const payload = { email };
            const token = jwt.sign(payload, secret, {
                expiresIn: '24h'
            })
            res.cookie('token', token, {httpOnly: true});
            res.status(200).json({status:1, auth:true, token:token,id_client: userExist._id,user_name:userExist.name,user_type:userExist.user_type});
        }
    },
    async checkToken(req,res){
        const token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
        if(!token){
            res.json({status:401,msg:'Não autorizado: Token inexistente!'});
        }else{
            jwt.verify(token, secret, function(err, decoded){
                if(err){
                    res.json({status:401,msg:'Não autorizado: Token inválido!'});
                }else{
                    res.json({status:200})
                }
            })
        }
    },

    async destroyToken(req,res) {
        const token = req.headers.token;
        if(token) {
            res.cookie('token', null,{httpOnly:true});
        }else{
            res.status(401).send("Logout não autorizado!")
        }
        res.send("Sessão finalizada com sucesso!");
    }

};