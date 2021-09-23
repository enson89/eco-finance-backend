module.exports = {
    components:{
        schemas:{
            loginReq:{
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
            loginRes:{
                type:'object',
                properties:{
                    userId:{
                        type:'integer',
                        description:"user id",
                        example:1
                    },
                    username:{
                        type:'string',
                        description:"user name",
                        example:"Sherlock Holmes"
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
                        description:"New ticker ID",
                        example:"OCBC"
                    },
                    esgRating:{
                        type:'string',
                        description:"New ESG rating for this new ticker",
                        example:"AAA"
                    }
                }
            },
            userId:{
                type:'integer',
                description:"User Id",
                example: 1
            },
            txnRes:{
                type:'object',
                properties:{
                    tickerId:{
                        type:'string',
                        description:"Ticker ID",
                        example:"OCBC"
                    },
                    esgRating:{
                        type:'string',
                        description:"ESG rating for this ticker",
                        example:"AAA"
                    },
                    amount:{
                        type:'integer',
                        description:"Transaction amount",
                        example:5000
                    }
                }
            }
        }
    }
}