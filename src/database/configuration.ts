export default () => ({
    database: {
      uri: 'mongodb+srv://mello123:mello@playinnest.xvknhoe.mongodb.net/',
    },
  });
  
  export interface DatabaseConfig {
    uri: string;
  }
  