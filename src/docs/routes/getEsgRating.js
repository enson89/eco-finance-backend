
module.exports = {
    get:{
        tags:['ESG Rating'],
        description: "Get ESG Rating",
        operationId: "getEsgRating",
        parameters:[{
            name:"tickerId",
            in:"query",
            schema:{
                $ref:"#/components/schemas/tickerId"
            },
            required:true,
            description: "ticker id"
        }],
        responses:{
            '200':{
                description: "Success"
            },
            '400':{
                description: 'Invalid request body'
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