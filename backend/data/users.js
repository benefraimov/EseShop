import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ben Efr',
        email: 'ben@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Bat Efr',
        email: 'bat@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users