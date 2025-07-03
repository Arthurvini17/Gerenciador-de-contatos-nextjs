const {
    PrismaClient
} = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await prisma.user.findMany();
            res.json(users);
        } catch (err) {
            res.status(500).json({
                error: 'erro ao buscar usuario'
            });
        }
    },

    createManyUsers: async (req, res) => {
        const users = req.body
        try {
            const created = await prisma.user.createMany({
                data: users
            });
            res.status(201).json({ message: 'Usuario criado com sucesso', users: created })
        } catch (error) {
            res.status(400).json({ message: 'erro ao criar usuario', error: error.message });
        }
    },

    getUser: async (req, res) => {
        const { id } = req.params
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID invalido' })
        }
        try {
            const getuser = await prisma.user.findFirst({
                where: { id: Number(id) },
            });
            res.status(200).json({ message: 'usuario encontrado', getuser });
        } catch (error) {
            res.status(500).json({ message: 'usuario não encontrado', error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params
        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID invalido' });
        } try {
            const deleting = await prisma.user.delete({
                where: { id: Number(id) },
            });
            res.status(200).json({ message: 'usuario deletado', deleting });
        } catch (error) {
            res.status(500).json({ message: 'usuario não encontrado', error: error.message });
        }
    },

    updateUser: async (req, res) => {
        const { id } = req.params
        const { Fname, Lname } = req.body;

        try {
            const userupdate = await prisma.user.update({
                where: { id: Number(id) },
                data: {
                    Fname, Lname
                }
            });
            res.status(200).json({ message: 'Usuario editado com sucesso', user: userupdate });
        } catch (error) {
            res.status(500).json({ message: 'usuario não editado', error: error.message });
        }
    },

}