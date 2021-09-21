module.exports = {
    components:{
        schemas:{
            login:{
                type:'object',
                properties:{
                    usernmae:{
                        type:'string',
                        description:"Login username",
                        example:"user@mail.com"
                    },
                    password:{
                        type:'string',
                        description:"Login password",
                        example:"abc123"
                    }
                }
            },
            id:{
                type:'string',
                description:"An id of a todo",
                example: "tyVgf"
            },
            Todo:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"Todo identification number",
                        example:"ytyVgh"
                    },
                    title:{
                        type:'string',
                        description:"Todo's title",
                        example:"Coding in JavaScript"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the todo",
                        example:false
                    }
                }
            },            
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}