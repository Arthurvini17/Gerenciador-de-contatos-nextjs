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
}