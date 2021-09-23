
module.exports = {
    delete:{
        tags:['Transaction'],
        description: "Delete user transction",
        operationId: "deleteTransaction",
        parameters:[{
            name:"txnId",
            in:"query",
            schema:{
                $ref:"#/components/schemas/txnId"
            },
            required:true,
            description: "Transaction id"
        }],
        responses:{
            '200':{
                description: "Success"
            },
            '400':{
                description: 'Invalid parameter'
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}