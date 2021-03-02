const jwt = require('jsonwebtoken')

const authenticate = (request, response) => {
    try {
        const token = request.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'verySecretValue')

    }
    catch {

    }
}