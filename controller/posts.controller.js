//before you write controller create the database js
const pool = require("../database/index.js");
const postsController = {
    getProfessorStudent: async(req, res)=>{
        try {
            const sql = "select concat(e.EMP_FNAME, ' ', e.EMP_LNAME, '-', e.EMP_NUM) AS Professor, concat(s.STU_FNAME, ' ', s.STU_LNAME) as Student from student `s` left join department `d` on s.DEPT_CODE=d.DEPT_CODE left join professor `p` on d.DEPT_CODE = p.DEPT_CODE left join employee `e` on p.EMP_NUM=e.EMP_NUM where p.EMP_NUM='114'";
            const [rows, fields] = await pool.query(sql);
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: error
            });
        }
    },
    // create: async(req, res)=>{
    //     try {
    //         const {title, content} = req.body;
    //         const sql = "insert into posts (title, content) values (? , ?)";
    //         const [rows, fields] = await pool.query(sql, [title,content]);
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
    // getById: async(req, res)=>{
    //     try {
    //         const {id} = req.params
    //         const [rows, fields] = await pool.query("select * from posts where id=?", [id]);
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
    // update: async(req, res)=>{
    //     try {
    //         const {title, content} = req.body;
    //         const {id} = req.params;
    //         const sql = "update posts set title=?, content=? where id=?";
    //         const [rows, fields] = await pool.query(sql, [title,content,id]);
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
    // delete: async(req, res)=>{
    //     try {
    //         const {id} = req.params
    //         const [rows, fields] = await pool.query("delete from posts where id=?", [id]);
    //         res.json({
    //             data: rows
    //         })
    //     } catch (error) {
    //         res.json({
    //             status: error
    //         });
    //     }
    // },
};

module.exports = postsController;