// import initializeSequelize from './initializeSequelize';

// const cache = {};
// const secretID = process.env.AWS_DB_SECRET;
// if (!secretID) {
//   throw Error('Missing -- process.env.AWS_DB_SECRET');
// }
// // TODO: Convert sequelize to TS
// export default async () => {
//   if (cache[secretID]) {
//     return cache[secretID];
//   }

//   cache[secretID] = initializeSequelize(secretID);

//   return cache[secretID];
// };

// export const trimQuery = (query) => query.replace(/\s+/g, ' ');
