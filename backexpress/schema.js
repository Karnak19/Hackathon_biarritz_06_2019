const graphql = require('graphql');
const axios = require('axios');

const { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const api = axios.create({
    baseURL : 'https://us-central1-rc-league.cloudfunctions.net/wildcodeschool',
    headers: {
        'Content-Type': 'application/json'
    }
});

function getEloRanking(homeTeamElo, awayTeamElo, matchStatus){
    const myChanceToWin = 1 / ( 1 + Math.pow(10, (awayTeamElo - homeTeamElo) / 400));
    return Math.round(32 * (matchStatus - myChanceToWin));
}

const WilderType = new GraphQLObjectType({
    name: 'Wilder',
    fields: () => ({
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        campus: { type: GraphQLString }
    })
});

const   CampusType = new GraphQLObjectType({
    name: 'Campus',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        city: { type: GraphQLString },
        country: { type: GraphQLString },
        creation: { type: GraphQLString },
        uid: { type: GraphQLString },
        manager: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        elo: { type: GraphQLInt },
    })
});

const MatchType = new GraphQLObjectType({
    name: 'Matches',
    fields: () => ({
        id: { type: GraphQLID },
        homeTeam: { type: GraphQLString },
        awayTeam: { type: GraphQLString },
        isoDate: { type: GraphQLString },
        winnerUid: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        wildersById: {
            type: WilderType,
            args: { id: { type: GraphQLID } },
            resolve(parent, {id}) {
                return api.get('/wilders').then((res) => res.data[id]);
            }
        },
        wilders: {
            type: new GraphQLList(WilderType),
            resolve(parent) {
                return api.get('/wilders').then((res) => res.data);
            }
        },
        campusById: {
            type: CampusType,
            args: { id: { type: GraphQLID } },
            resolve(parent, {id}) {
                return api.get('/campuses').then((res) => res.data[id]);
            }
        },

        campus: {
            type: new GraphQLList(CampusType),
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return api.get('/campuses').then((res) => res.data);
            }
        },
        matchById: {
            type: MatchType,
            args: { id: { type: GraphQLID } },
            resolve(parent, {id}) {
                return api.get('/matches').then((res) => res.data[id]);
            }
        },
        match: {
            type: new GraphQLList(MatchType),
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return api.get('/matches').then((res) => res.data);

            }
        },
        elo: {
            type: new GraphQLList(CampusType),
            async resolve() {
                const {data: matches} = await api.get('/matches');
                const {data: campuses} = await api.get('/campuses');
                const histo = matches.reduce((acc, { homeTeam, awayTeam, winnerUid}) => {
                    if (!acc[homeTeam]){
                        acc[homeTeam] = 1000;
                    }
                    if (!acc[awayTeam]){
                        acc[awayTeam] = 1000;
                    }
                    const eloForHomeTeam = getEloRanking(acc[homeTeam], acc[awayTeam], homeTeam === winnerUid ? 1 : 0);
                    acc[homeTeam] += eloForHomeTeam;
                    acc[awayTeam] -= eloForHomeTeam;
                    return acc;
                },{})
                return campuses.map((campuse) => ({...campuse, elo: histo[campuse.uid]}));
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
}); 