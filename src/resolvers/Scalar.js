const { GraphQLScalarType } = require('graphql');
const { GraphQLUpload } = require('graphql-upload')

var bigInt = require("big-integer");
const {
   DateTimeResolver,
   EmailAddressResolver,
   NegativeFloatResolver,
   NegativeIntResolver,
   NonNegativeFloatResolver,
   NonNegativeIntResolver,
   NonPositiveFloatResolver,
   NonPositiveIntResolver,
   PhoneNumberResolver,
   PositiveFloatResolver,
   PositiveIntResolver,
   PostalCodeResolver,
   UnsignedFloatResolver,
   UnsignedIntResolver,
   URLResolver,
   BigIntResolver,
   LongResolver,
   GUIDResolver,
   HexColorCodeResolver,
   HSLResolver,
   HSLAResolver,
   IPv4Resolver,
   IPv6Resolver,
   ISBNResolver,
   MACResolver,
   PortResolver,
   RGBResolver,
   RGBAResolver,
   USCurrencyResolver,
   JSONResolver,
   JSONObjectResolver,
 }= require('graphql-scalars') ;
const {
   GraphQLDate,
   GraphQLTime,
   GraphQLDateTime
 } = require('graphql-iso-date') ;

 module.exports = {
    DateTime: DateTimeResolver,
    Date:     GraphQLDate,
    Upload:    GraphQLUpload,   
    BigIntR:BigIntResolver,
    BigInt: new GraphQLScalarType({
      name: 'BigInt',
      description: 'https://www.npmjs.com/package/big-integer',
      serialize: (value) => bigInt(value),
      parseValue: (value) => value,
      parseLiteral: (ast) => bigInt(ast)
    }),
    Long:   LongResolver,
    JSON:   JSONResolver,
  };