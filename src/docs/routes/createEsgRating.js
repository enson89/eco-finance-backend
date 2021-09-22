
module.exports = {
    post:{
        tags:['ESG Rating'],
        description: "Add new ESG rating",
        operationId: "createEsgRating",
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/esgRating'
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