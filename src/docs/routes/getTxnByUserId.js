
module.exports = {
    get:{
        tags:['Transaction'],
        description: "Get user transction",
        operationId: "getTransaction",
        parameters:[{
            name:"userId",
            in:"query",
            schema:{
                $ref:"#/components/schemas/userId"
            },
            required:true,
            description: "user id"
        }],
        responses:{
            '200':{
                description: "Success",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/txnRes"
                        }
                    }
                }
            },
            '400':{
                description: 'Invalid paramemter'
            },
            '404':{
                description: 'Record not found'
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}