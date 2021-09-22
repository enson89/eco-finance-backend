
module.exports = {
    post:{
        tags:['Login'],
        description: "User login",
        operationId: "login",
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
                description: 'Unauthorized access'
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}