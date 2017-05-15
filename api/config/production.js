module.exports = {
  db: {
    url: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@
    cluster0-shard-00-00-p4ra2.mongodb.net:27017,
    cluster0-shard-00-01-p4ra2.mongodb.net:27017,
    cluster0-shard-00-02-p4ra2.mongodb.net:27017/
    gabai
    ?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`
  },
};
