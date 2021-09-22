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
            },
            tickerId:{
                type:'string',
                description:"Ticker Id",
                example: "DBS"
            },
            esgRating:{
                type:'object',
                properties:{
                    tickerId:{
                        type:'string',
                        description:"New ticket ID",
                        example:"OCBC"
                    },
                    esgRating:{
                        type:'string',
                        description:"New ESG rating for this new ticker",
                        example:"AAA"
                    }
                }
            }
        }
    }
}