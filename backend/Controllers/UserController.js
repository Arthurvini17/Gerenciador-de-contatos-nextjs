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
    }

}