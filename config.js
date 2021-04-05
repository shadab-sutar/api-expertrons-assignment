module.exports = {
    port: 8000,
    dbPath: 'mongodb://localhost:27017/mentor_db',
    jwtSecrete: 'privateKey_for_mentorCRUD', //this key can be more secure...
    tokenSetup: { expiresIn: '365d', issuer: 'User' },
    saltingRounds: 10
};