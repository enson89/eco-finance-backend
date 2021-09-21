module.exports = {
    components:{
        schemas:{
            login:{
                type:'object',
                properties:{
                    username:{
                        type:'string',
                        description:"Login username",
                        example:"user1@gmail.com"
                    },
                    password:{
                        type:'string',
                        description:"Login password",
                        example:"abc123"
                    }
                }
            }
        }
    }
}