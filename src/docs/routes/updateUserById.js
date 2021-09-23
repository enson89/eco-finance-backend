
module.exports = {
    put:{
        tags:['User'],
        description: "Update user record",
        operationId: "updateUser",
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/userUpdateReq'
                    }
                }
            }
        },
        responses:{
            '200':{
                description: "Success"
            },
            '400':{
                description: 'Invalid request body'
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}