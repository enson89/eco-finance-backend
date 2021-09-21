
module.exports = {
    post:{
        description: "User login",
        operationId: "login",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/login'
                    }
                }
            }
        },
        responses:{
            '200':{
                description: "User login successfully"
            },
            '400':{
                description: 'Invalid request body'
            },
            '401':{
                description: 'Authorized access'
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}