// import {Admin} from '../models/Admin.js'
import {Account} from '../models/account'
// import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const  getAccount = async (req, res) => {
    var username = req.body.username
    var password = req.body.password
    Account.findOne({
        
        username: username,
        password : password
    })
    .then(data =>{
        if (data){
            var token = jwt.sign({
                _id : data._id,
            }, 'account')
            return res.json({
                message: 'thanh cong',
                token : token

            })
        }
        else {
            return res.json('that bai')
        }
    })
    .catch(err =>{
        res.status(300).json('loi server')
    })
}

// export const getAdmins = async (req, res) => {
//     try{
//         const admins = await Admin.find()

//         res.json({
//             status: 'success',
//             result: admins.length,
//             admins: admins 
//         })
//     } catch(err) {
//         return req.status(500).json({msg: err.message});
//     }
// }

// export const createAdmin = async (req, res) => {
//     try{
//         const admin = req.body

//         const result = await Admin.findOne({username: admin.username})
//         if(result){
//             return res.status(400).json({msg: 'Tài khoản đã tồn tại'})
//         }

//         const passwordHash = await bcrypt.hash(admin.password, 10);

//         const newAdmin = new Admin({...admin, password: passwordHash})
//         await newAdmin.save()

//         res.json({msg: 'Tạo thành công'})
//     } catch(err) {
//         return req.status(500).json({msg: err.message});
//     }
// }

// export const updateAdmin = async (req, res) => {
//     try{
//         const updateAdmin = req.body

//         const passwordHash = await bcrypt.hash(updateAdmin.password, 10);

//         await Admin.findOneAndUpdate({_id: req.params.id}, {...updateAdmin, password: passwordHash})

//         res.json({msg: 'Cập nhật thành công'})
//     } catch(err) {
//         return req.status(500).json({msg: err.message});
//     }
// }
// export const deleteFeedback = async (req, res) => {
//     try {
//         await FeedBack.findByIdAndDelete(req.params.id)

//         res.json({msg: 'Xóa thành công'})
//     } catch (err) {
//         return req.status(500).json({msg: err.message})
//     }
// }